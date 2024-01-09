export function formatBalance(balance: bigint, decimals: number = 18): string {
  const formatter = new Intl.NumberFormat("en-US");

  let balanceString = String(balance);
  const length = balanceString.length;
  const decimalPosition = length - decimals;
  const n = Number(balanceString.substring(0, decimalPosition));

  // get decimal part if length > decimals or add 4 zeros
  const decimalPart =
    length > decimals
      ? balanceString.slice(-decimals, -decimals + 4)
      : "0".repeat(4);

  return formatter.format(n).toString() + "." + decimalPart;
}
