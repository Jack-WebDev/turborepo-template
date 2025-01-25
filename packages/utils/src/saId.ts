export function getDateOfBirthFromID(idNumber: string): string | Date {
    const yearPart = idNumber.substring(0, 2);
    const monthPart = idNumber.substring(2, 4);
    const dayPart = idNumber.substring(4, 6);
  
    const currentYear = new Date().getFullYear() % 100;
    const century = parseInt(yearPart) <= currentYear ? '20' : '19';
  
    const year = century + yearPart;
    const month = monthPart;
    const day = dayPart;
  
    const date = new Date(`${year}-${month}-${day}`);
  
    return date;
  }
  
  function luhnAlgorithm(idWithoutChecksum: string): number {
    let sum = 0;
    let isSecond = false;
  
    for (let i = idWithoutChecksum.length - 1; i >= 0; i--) {
      let digit = parseInt(idWithoutChecksum[i] ?? "");
  
      if (isSecond) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
  
      sum += digit;
      isSecond = !isSecond;
    }
  
    return (10 - (sum % 10)) % 10;
  }
  
  export function generateFakeSouthAfricanID(
    age: number,
    gender: 'male' | 'female',
    birthMonth: number,
    birthDay: number,
  ): string {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const birthYearTwoDigits = birthYear % 100;
  
    const month = birthMonth.toString().padStart(2, '0');
    const day = birthDay.toString().padStart(2, '0');
  
    const sequence =
      gender === 'male' ? Math.floor(5000 + Math.random() * 5000) : Math.floor(Math.random() * 5000);
  
    const citizenship = 0;
    const placeholder = 8;
  
    const idWithoutChecksum = `${birthYearTwoDigits}${month}${day}${sequence}${citizenship}${placeholder}`;
  
    const checksum = luhnAlgorithm(idWithoutChecksum);
  
    return `${idWithoutChecksum}${checksum}`;
  }
  