// Copy to clipboard functionality
document.getElementById('copy-button').addEventListener('click', function() {
  const codeBlock = document.getElementById('code-block').innerText;
  navigator.clipboard.writeText(codeBlock).then(function() {
    const copyButton = document.getElementById('copy-button');
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
      copyButton.innerText = 'Copy';
    }, 2000);
  }, function() {
    alert('Failed to copy code.');
  });
});

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
