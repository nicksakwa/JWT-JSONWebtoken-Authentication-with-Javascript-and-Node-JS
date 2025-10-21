const SECRET_KEY = 'your_secret_key';
const userPayload = {
    userId: 123,
    username: 'testuser',
    role: 'admin'
};
console.log('--- Generating JWT ---');
try{
    const token=jwt.sign(
        userPayload,
        SECRET_KEY,
        {expiresIn:'1h'}
    );
    console.log('Payload:', userPayload);
    console.log('Generated Token:', token);
    console.log('-------------------\n');
    console.log('--- Verifying JWT ---');
    const receivedToken = token;

    jwt.verify(receivedToken, SECRET_KEY, (err, decoded) => {
        if(err){
            console.error('Token verification failed:', err.message);
            if(err.name === 'TokenExpiredError'){
                console.error('The token has expired.');
            }
        } else {
            console.log('Verification successful');
            console.log('Decoded Payload:', decoded);
        }
    });
} catch (e) {
    console.error('An error occurred during JWT operation:', e);
}