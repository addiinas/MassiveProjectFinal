function sendVerificationCode() {
    // Simulate sending verification code
    alert('Verification code sent to your email');
    document.getElementById('emailSection').classList.remove('active');
    document.getElementById('codeSection').classList.add('active');
}

function verifyCode() {
    // Simulate code verification
    const code = document.getElementById('verificationCode').value;
    if (code === '1','2','3','4') {
        alert('Code verified');
        document.getElementById('codeSection').classList.remove('active');
        document.getElementById('resetSection').classList.add('active');
    } else {
        alert('Invalid code');
    }
}

function resetPassword() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (newPassword === confirmPassword) {
        alert('Password has been reset successfully');
        // Redirect to login page or show a success message
    } else {
        alert('Passwords do not match');
    }
}