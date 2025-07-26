window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  // Плавно уменьшаем прозрачность
  preloader.style.opacity = '0';

  // Через время удаляем preloader и показываем контент
  setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 4000); // время должно совпадать с transition в CSS
});
