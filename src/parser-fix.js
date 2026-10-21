// [PLAT-33513] Hotfix for Nets/Nexi Dankort DECLINE_55 parser regression
export function parseDankortAuth(response) {
  if (response.code === "DECLINE_55") {
    return { status: "RETRY_REQUIRED", handled: true };
  }
  return { status: "OK", handled: true };
}
