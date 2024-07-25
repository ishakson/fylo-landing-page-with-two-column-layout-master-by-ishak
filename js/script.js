document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.get-start');
  const emailInput = document.querySelector('.email');
  const emailCheck = document.querySelector('.email-check');

  // E-posta düzenli ifadesi
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  button.addEventListener('click', function(event) {
      // E-posta adresinin formatını kontrol et
      if (!emailPattern.test(emailInput.value)) {
          // Hatalı ise stil ve hata mesajını göster
          emailInput.classList.add('invalid');
          emailInput.classList.remove('valid');
          emailCheck.style.display = 'block';
      } else {
          // Geçerli ise stil ve hata mesajını gizle
          emailInput.classList.add('valid');
          emailInput.classList.remove('invalid');
          emailCheck.style.display = 'none';
      }
  });
  const buttonCta = document.querySelector('.cta .get-start');
  const emailInputCta = document.querySelector('.cta .email');
  const emailCheckCta = document.querySelector('.cta .email-check');



  buttonCta.addEventListener('click', function(event) {
      // E-posta adresinin formatını kontrol et
      if (!emailPattern.test(emailInputCta.value)) {
          // Hatalı ise stil ve hata mesajını göster
          emailInputCta.classList.add('invalid');
          emailInputCta.classList.remove('valid');
          emailCheckCta.style.display = 'block';
      } else {
          // Geçerli ise stil ve hata mesajını gizle
          emailInputCta.classList.add('valid');
          emailInputCta.classList.remove('invalid');
          emailCheckCta.style.display = 'none';
      }
  });
});
