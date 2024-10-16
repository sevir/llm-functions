/**
 * Get the system ip address
 */
exports.get_ipinfo = async function getIpinfo() {
  const res = await fetch("https://httpbin.org/ip");
  return res.json();
};
