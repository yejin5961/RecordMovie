const KakaoLogin = (history) => {
    try {
        window.Kakao.Auth.login({
            success: (response) => {
                console.log('정상적으로 로그인 되었습니다.');
                history.push("/postPage");
            },
            fail: (error) => {
                alert(JSON.stringify(error));
            },
        });
    } catch (err) {
        console.err(err);
    }

};

export default KakaoLogin;