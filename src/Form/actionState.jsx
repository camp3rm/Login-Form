async function submitForm (_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if (!name || name.length < 3) {
    return { success: false, message: 'Please enter a valid name' };
  }
  if (!email || !emailRegExp.test(email)) {
    return { success: false, message: 'Please enter a valid email address' };
  }
  if (!password || !passwordRegExp.test(password)) {
    return { success: false, message: 'Please enter a valid password' };
  }

  return { success: true, message: 'Form submitted successfully!' };
}
export default submitForm;
