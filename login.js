document.addEventListener('DOMContentLoaded', () => {
    const authStorageKey = 'auth-demo-v1';
    const authStatus = document.querySelector('#auth-status');
    const authLogoutButton = document.querySelector('#auth-logout');
    const authMessage = document.querySelector('#auth-message');
    const languageSelect = document.querySelector('#lang-select');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authPanels = document.querySelectorAll('.auth-panel');
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');
    const languageKey = 'site-lang';
    const translations = {
        en: {
            'site.title': 'Login / Sign up',
            'lang.label': 'Language',
            'login.back': '← Back to home',
            'auth.required': 'Login required',
            'auth.loggedIn': 'Logged in as {name}',
            'auth.defaultName': 'User',
            'auth.logout': 'Log out',
            'login.tab.login': 'Login',
            'login.tab.signup': 'Sign up',
            'login.title': 'Login with email',
            'login.email': 'Email',
            'login.emailPlaceholder': 'you@example.com',
            'login.password': 'Password',
            'login.passwordPlaceholder': 'Password',
            'login.submit': 'Login',
            'login.hint': 'This demo is saved only in your browser.',
            'signup.title': 'Sign up with email',
            'signup.name': 'Name',
            'signup.namePlaceholder': 'Name or nickname',
            'signup.email': 'Email',
            'signup.emailPlaceholder': 'you@example.com',
            'signup.password': 'Password',
            'signup.passwordPlaceholder': '8+ characters',
            'signup.submit': 'Sign up',
            'signup.hint': 'Passwords are not encrypted in this demo.',
            'message.loggedOut': 'You have logged out.',
            'message.loginRequired': 'Please enter email and password.',
            'message.signupRequired': 'Please enter name, email, and password.',
            'message.loginSuccess': 'Login successful! Redirecting to home...',
            'message.signupSuccess': 'Sign up complete! Redirecting to home...',
            'message.alreadyLoggedIn': 'You are already logged in.',
            'loading.login': 'Logging in...',
            'loading.signup': 'Signing up...'
        },
        ko: {
            'site.title': '로그인 / 가입',
            'lang.label': '언어',
            'login.back': '← 홈으로',
            'auth.required': '로그인 필요',
            'auth.loggedIn': '{name}님 로그인됨',
            'auth.defaultName': '사용자',
            'auth.logout': '로그아웃',
            'login.tab.login': '로그인',
            'login.tab.signup': '가입',
            'login.title': '이메일로 로그인',
            'login.email': '이메일',
            'login.emailPlaceholder': 'you@example.com',
            'login.password': '비밀번호',
            'login.passwordPlaceholder': '비밀번호',
            'login.submit': '로그인',
            'login.hint': '데모 버전은 브라우저에만 저장됩니다.',
            'signup.title': '이메일로 가입',
            'signup.name': '이름',
            'signup.namePlaceholder': '이름 또는 닉네임',
            'signup.email': '이메일',
            'signup.emailPlaceholder': 'you@example.com',
            'signup.password': '비밀번호',
            'signup.passwordPlaceholder': '8자 이상',
            'signup.submit': '가입하기',
            'signup.hint': '비밀번호는 실제 암호화되지 않습니다. 데모용입니다.',
            'message.loggedOut': '로그아웃되었습니다.',
            'message.loginRequired': '이메일과 비밀번호를 입력해 주세요.',
            'message.signupRequired': '이름, 이메일, 비밀번호를 모두 입력해 주세요.',
            'message.loginSuccess': '로그인 성공! 홈으로 이동합니다.',
            'message.signupSuccess': '가입 완료! 홈으로 이동합니다.',
            'message.alreadyLoggedIn': '이미 로그인되어 있습니다.',
            'loading.login': '로그인 중...',
            'loading.signup': '가입 중...'
        },
        ja: {
            'site.title': 'ログイン / 新規登録',
            'lang.label': '言語',
            'login.back': '← ホームへ',
            'auth.required': 'ログインが必要です',
            'auth.loggedIn': '{name}さんでログイン中',
            'auth.defaultName': 'ユーザー',
            'auth.logout': 'ログアウト',
            'login.tab.login': 'ログイン',
            'login.tab.signup': '新規登録',
            'login.title': 'メールでログイン',
            'login.email': 'メール',
            'login.emailPlaceholder': 'you@example.com',
            'login.password': 'パスワード',
            'login.passwordPlaceholder': 'パスワード',
            'login.submit': 'ログイン',
            'login.hint': 'このデモはブラウザにのみ保存されます。',
            'signup.title': 'メールで新規登録',
            'signup.name': '名前',
            'signup.namePlaceholder': '名前またはニックネーム',
            'signup.email': 'メール',
            'signup.emailPlaceholder': 'you@example.com',
            'signup.password': 'パスワード',
            'signup.passwordPlaceholder': '8文字以上',
            'signup.submit': '登録する',
            'signup.hint': 'このデモではパスワードは暗号化されません。',
            'message.loggedOut': 'ログアウトしました。',
            'message.loginRequired': 'メールとパスワードを入力してください。',
            'message.signupRequired': '名前、メール、パスワードを入力してください。',
            'message.loginSuccess': 'ログイン成功！ホームへ移動します。',
            'message.signupSuccess': '登録完了！ホームへ移動します。',
            'message.alreadyLoggedIn': 'すでにログインしています。',
            'loading.login': 'ログイン中...',
            'loading.signup': '登録中...'
        }
    };
    let currentLanguage = sessionStorage.getItem(languageKey) || 'en';
    if (!translations[currentLanguage]) {
        currentLanguage = 'en';
    }
    const translate = (key, vars = {}) => {
        const dict = translations[currentLanguage] || translations.en;
        const template = dict[key] || translations.en[key] || key;
        return template.replace(/\{(\w+)\}/g, (_, name) => {
            return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : `{${name}}`;
        });
    };
    const applyTranslations = () => {
        document.documentElement.lang = currentLanguage;
        document.title = translate('site.title');
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (key) {
                el.textContent = translate(key);
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.dataset.i18nPlaceholder;
            if (key) {
                el.setAttribute('placeholder', translate(key));
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.dataset.i18nAria;
            if (key) {
                el.setAttribute('aria-label', translate(key));
            }
        });
    };

    const loadAuth = () => {
        try {
            const raw = localStorage.getItem(authStorageKey);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    };

    const saveAuth = (user) => {
        if (!user) {
            localStorage.removeItem(authStorageKey);
            return;
        }
        localStorage.setItem(authStorageKey, JSON.stringify(user));
    };

    const setMessage = (text, tone = 'info') => {
        if (!authMessage) {
            return;
        }
        authMessage.textContent = text || '';
        authMessage.className = text ? `auth-message ${tone}`.trim() : 'auth-message';
    };

    const setAuthUI = (user) => {
        if (authStatus) {
            authStatus.textContent = user
                ? translate('auth.loggedIn', { name: user.name })
                : translate('auth.required');
        }
        if (authLogoutButton) {
            authLogoutButton.classList.toggle('hidden', !user);
        }
    };

    const setLoading = (button, isLoading) => {
        if (!button) {
            return;
        }
        const loadingText = button.dataset.loadingText || '처리 중...';
        if (isLoading) {
            button.dataset.originalText = button.textContent;
            button.textContent = loadingText;
        } else if (button.dataset.originalText) {
            button.textContent = button.dataset.originalText;
            delete button.dataset.originalText;
        }
        button.disabled = isLoading;
    };

    applyTranslations();
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', (event) => {
            const nextLang = event.target.value;
            if (!translations[nextLang]) {
                return;
            }
            currentLanguage = nextLang;
            sessionStorage.setItem(languageKey, currentLanguage);
            applyTranslations();
            setAuthUI(loadAuth());
            setMessage('');
        });
    }

    authTabs.forEach((button) => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            authTabs.forEach((item) => item.classList.toggle('active', item === button));
            authPanels.forEach((panel) => {
                panel.classList.toggle('active', panel.dataset.panel === tab);
            });
            setMessage('');
        });
    });

    if (authLogoutButton) {
        authLogoutButton.addEventListener('click', () => {
            saveAuth(null);
            setAuthUI(null);
            setMessage(translate('message.loggedOut'), 'success');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            setMessage('');
            const formData = new FormData(loginForm);
            const email = String(formData.get('email') || '').trim();
            const password = String(formData.get('password') || '').trim();
            if (!email || !password) {
                setMessage(translate('message.loginRequired'), 'error');
                return;
            }
            const submitButton = loginForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.dataset.loadingText = translate('loading.login');
            }
            setLoading(submitButton, true);
            window.setTimeout(() => {
                const user = { name: email.split('@')[0] || translate('auth.defaultName'), email };
                saveAuth(user);
                setAuthUI(user);
                setMessage(translate('message.loginSuccess'), 'success');
                loginForm.reset();
                window.setTimeout(() => {
                    window.location.href = 'index.html';
                }, 500);
            }, 400);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            setMessage('');
            const formData = new FormData(signupForm);
            const name = String(formData.get('name') || '').trim();
            const email = String(formData.get('email') || '').trim();
            const password = String(formData.get('password') || '').trim();
            if (!name || !email || !password) {
                setMessage(translate('message.signupRequired'), 'error');
                return;
            }
            const submitButton = signupForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.dataset.loadingText = translate('loading.signup');
            }
            setLoading(submitButton, true);
            window.setTimeout(() => {
                const user = { name, email };
                saveAuth(user);
                setAuthUI(user);
                setMessage(translate('message.signupSuccess'), 'success');
                signupForm.reset();
                window.setTimeout(() => {
                    window.location.href = 'index.html';
                }, 500);
            }, 500);
        });
    }

    const currentUser = loadAuth();
    setAuthUI(currentUser);
    if (currentUser) {
        setMessage(translate('message.alreadyLoggedIn'), 'info');
    }
});
