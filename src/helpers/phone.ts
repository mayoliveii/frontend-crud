export const formatPhone = (phoneNumber: string): string => {

  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
  const formattedPhoneNumber = `
  (${numericPhoneNumber.slice(0, 2)})
   ${numericPhoneNumber.slice(2, 3)}
    ${numericPhoneNumber.slice(3, 7)}
    -${numericPhoneNumber.slice(7)}
  `;

  return formattedPhoneNumber || '';
};