const Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  serverName: process.env.SENTRY_SERVICE_NAME, // 👈 Nombre del servicio
  environment: process.env.NODE_ENV || "development",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

module.exports = Sentry;
