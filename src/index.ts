// src/index.ts
var index_default = {
  async scheduled(controller, env, ctx) {
    switch (controller.cron) {
      case "* * * * *":
        await updateAPI();
        break;
      case "*/10 * * * *":
        await updateAPI2();
        break;
      case "*/45 * * * *":
        await updateAPI3();
        break;
    }
    console.log("cron processed");
  }
};
function updateAPI() {
  console.log("updateAPI 1");
}
function updateAPI2() {
  console.log("updateAPI 2");
}
function updateAPI3() {
  console.log("updateAPI 3");
}
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
//
