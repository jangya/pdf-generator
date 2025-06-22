
const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const puppeteer = require("puppeteer");
const {getResumeHtml} = require("./resumeTemplate");

setGlobalOptions({maxInstances: 10});

exports.generatePDFFromURL = onRequest(async (request, response) => {
  try {
    logger.info("PDF generation from URL started", {structuredData: true});

    // Set CORS headers
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Methods", "GET, POST");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    if (request.method === "OPTIONS") {
      response.status(204).send("");
      return;
    }

    const url = request.query.url || (request.body && request.body.url);

    if (!url) {
      response.status(400).json({
        error: "URL parameter is required",
        usage: "Add ?url=https://example.com or send URL in request body",
      });
      return;
    }

    // Launch Puppeteer browser
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Navigate to URL and generate PDF
    await page.goto(url, {waitUntil: "networkidle0"});

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        right: "20mm",
        bottom: "20mm",
        left: "20mm",
      },
    });

    await browser.close();

    // Set response headers for PDF download
    response.set("Content-Type", "application/pdf");
    response.set("Content-Disposition", "attachment; filename=\"webpage.pdf\"");
    response.set("Content-Length", pdfBuffer.length.toString());

    logger.info("PDF generated successfully from URL", {structuredData: true});
    response.end(pdfBuffer, "binary");
  } catch (error) {
    logger.error("Error generating PDF from URL:", error);
    response.status(500).json({
      error: "Failed to generate PDF from URL",
      message: error.message,
    });
  }
});


// Resume PDF Generation function
exports.generateResume = onRequest(async (request, response) => {
  try {
    logger.info("Resume PDF generation started", {structuredData: true});

    // Set CORS headers
    response.set("Access-Control-Allow-Origin", "*");
    response.set("Access-Control-Allow-Methods", "GET, POST");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (request.method === "OPTIONS") {
      response.status(204).send("");
      return;
    }

    // Get resume data from request body or use default
    const resumeData = request.body || {};
    const htmlContent = getResumeHtml(resumeData);

    // Launch Puppeteer browser
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Set content and generate PDF
    await page.setContent(htmlContent, {waitUntil: "networkidle0"});

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "15mm",
        right: "15mm",
        bottom: "15mm",
        left: "15mm",
      },
    });

    await browser.close();

    // Validate PDF buffer
    if (!pdfBuffer || pdfBuffer.length === 0) {
      throw new Error("Generated PDF buffer is empty");
    }

    // Log buffer info for debugging
    logger.info(
        `Resume PDF buffer size: ${pdfBuffer.length} bytes`,
        {structuredData: true},
    );

    // Set response headers for PDF download
    response.set("Content-Type", "application/pdf");
    response.set("Content-Disposition", "attachment; filename=\"resume.pdf\"");
    response.set("Content-Length", pdfBuffer.length.toString());
    response.set("Cache-Control", "no-cache");

    logger.info("Resume PDF generated successfully", {structuredData: true});
    response.end(pdfBuffer, "binary");
  } catch (error) {
    logger.error("Error generating resume PDF:", error);
    response.status(500).json({
      error: "Failed to generate resume PDF",
      message: error.message,
    });
  }
});
