const convertRupiah = nominal => {
  const reverse = nominal
    .toString()
    .split("")
    .reverse()
    .join("");
  const ribuan = reverse.match(/\d{1,3}/g);
  const hasil = ribuan
    .join(".")
    .split("")
    .reverse()
    .join("");
  return hasil;
};

export default convertRupiah;
