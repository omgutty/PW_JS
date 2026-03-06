// This is very important for Playwright / automation interviews.
// Imagine we need:
// User details API
// Orders API
// Payment API
// Instead of calling one after another (slow), we call them parallel.


async function getDashboardData() {
  try {
    const [user, orders, payments] = await Promise.all([
      fetch("/api/user"),
      fetch("/api/orders"),
      fetch("/api/payments")
    ]);

    console.log("All data loaded");
  } catch (error) {
    console.log("One API failed:", error);
  }
}
//👉 This improves performance because APIs run in parallel.