document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('#hero button');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const languageKey = 'site-lang';
    const localeMap = {
        en: 'en-US',
        ko: 'ko-KR',
        ja: 'ja-JP'
    };
    const translations = {
        en: {
            'site.title': 'Welcome to Korea',
            'lang.label': 'Language',
            'nav.about': 'About',
            'nav.culture': 'Culture',
            'nav.destinations': 'Destinations',
            'nav.board': 'Q&A',
            'auth.required': 'Login required',
            'auth.loggedIn': 'Logged in as {name}',
            'auth.open': 'Login / Sign up',
            'auth.logout': 'Log out',
            'hero.title': 'Welcome to beautiful Korea',
            'hero.subtitle': 'Discover vibrant culture and breathtaking scenery.',
            'hero.cta': 'Learn more',
            'about.title': 'About Korea',
            'about.body': 'South Korea is located on the southern part of the Korean Peninsula in East Asia. It is known for vibrant cities, deep history, and delicious food.',
            'culture.title': 'Culture',
            'culture.kpop.title': 'K-pop',
            'culture.kpop.body': 'Dive into the world of Korean pop music that swept the globe.',
            'culture.kpop.alt': 'K-pop dance performance',
            'culture.food.title': 'Korean Cuisine',
            'culture.food.body': 'From kimchi and bulgogi to bibimbap, explore rich Korean flavors.',
            'culture.food.alt': 'Bibimbap in a bowl',
            'culture.history.title': 'Tradition & History',
            'culture.history.body': 'Discover Korea\'s heritage through palaces and temples with centuries of history.',
            'culture.history.alt': 'Bulguksa Temple in Gyeongju',
            'destinations.title': 'Top Destinations',
            'destinations.seoul.title': 'Seoul',
            'destinations.seoul.body': 'A dynamic capital where modern architecture meets historic sites.',
            'destinations.seoul.alt': 'Seoul',
            'destinations.busan.title': 'Busan',
            'destinations.busan.body': 'A coastal city known for beaches and lively markets.',
            'destinations.busan.alt': 'Busan',
            'destinations.jeju.title': 'Jeju',
            'destinations.jeju.body': 'A volcanic island famous for unique landscapes and beaches.',
            'destinations.jeju.alt': 'Jeju',
            'destinations.moreCta': 'Learn more',
            'destinations.moreHint': 'Explore more Korean cities and build your own route.',
            'cities.title': 'Explore more cities in Korea',
            'cities.subtitle': 'Choose the cities you want to visit and save your dream route.',
            'cities.search.label': 'Search cities',
            'cities.search.placeholder': 'Search by name or region',
            'cities.search.aria': 'Search cities',
            'cities.selectedLabel': 'Selected:',
            'cities.selectedEmpty': 'No cities selected yet.',
            'cities.clear': 'Clear',
            'cities.helper': 'Click a card to select a city. You can pick as many as you like.',
            'cities.map.title': 'Major cities on the map',
            'cities.map.hint': 'Hover or tap a city to preview a photo.',
            'cities.map.aria': 'Map of South Korea with major cities',
            'cities.map.preview.title': 'City preview',
            'cities.map.preview.empty': 'Hover or tap a city pin to see details.',
            'cities.map.seoul.desc': 'Skyline energy, palaces, and food streets.',
            'cities.map.busan.desc': 'Beaches, harbor views, and seafood markets.',
            'cities.map.jeju.desc': 'Volcanic landscapes and coastal trails.',
            'cities.map.incheon.desc': 'Gateway city with modern waterfronts.',
            'cities.map.daegu.desc': 'Inland city with cafés and green hills.',
            'cities.map.daejeon.desc': 'Science hub with parks and museums.',
            'cities.map.gwangju.desc': 'Creative culture and local cuisine.',
            'cities.map.ulsan.desc': 'Coastal industry and ocean walks.',
            'cities.seoul.name': 'Seoul',
            'cities.seoul.region': 'Capital Area',
            'cities.seoul.aria': 'Select Seoul',
            'cities.busan.name': 'Busan',
            'cities.busan.region': 'Southeast Coast',
            'cities.busan.aria': 'Select Busan',
            'cities.jeju.name': 'Jeju',
            'cities.jeju.region': 'Island Escape',
            'cities.jeju.aria': 'Select Jeju',
            'cities.incheon.name': 'Incheon',
            'cities.incheon.region': 'West Coast Gateway',
            'cities.incheon.aria': 'Select Incheon',
            'cities.daegu.name': 'Daegu',
            'cities.daegu.region': 'Inland Basin',
            'cities.daegu.aria': 'Select Daegu',
            'cities.daejeon.name': 'Daejeon',
            'cities.daejeon.region': 'Science Hub',
            'cities.daejeon.aria': 'Select Daejeon',
            'cities.gwangju.name': 'Gwangju',
            'cities.gwangju.region': 'Culture City',
            'cities.gwangju.aria': 'Select Gwangju',
            'cities.ulsan.name': 'Ulsan',
            'cities.ulsan.region': 'Industrial Port',
            'cities.ulsan.aria': 'Select Ulsan',
            'cities.suwon.name': 'Suwon',
            'cities.suwon.region': 'Hwaseong Fortress',
            'cities.suwon.aria': 'Select Suwon',
            'cities.sejong.name': 'Sejong',
            'cities.sejong.region': 'Administrative City',
            'cities.sejong.aria': 'Select Sejong',
            'cities.gangneung.name': 'Gangneung',
            'cities.gangneung.region': 'East Sea Coast',
            'cities.gangneung.aria': 'Select Gangneung',
            'cities.jeonju.name': 'Jeonju',
            'cities.jeonju.region': 'Hanok & Food',
            'cities.jeonju.aria': 'Select Jeonju',
            'cities.gyeongju.name': 'Gyeongju',
            'cities.gyeongju.region': 'Ancient Capital',
            'cities.gyeongju.aria': 'Select Gyeongju',
            'cities.yeosu.name': 'Yeosu',
            'cities.yeosu.region': 'Southern Coast',
            'cities.yeosu.aria': 'Select Yeosu',
            'cities.sokcho.name': 'Sokcho',
            'cities.sokcho.region': 'Seoraksan Gateway',
            'cities.sokcho.aria': 'Select Sokcho',
            'cities.andong.name': 'Andong',
            'cities.andong.region': 'Traditional Culture',
            'cities.andong.aria': 'Select Andong',
            'board.title': 'Q&A Board',
            'board.subtitle': 'Ask anything and anyone can help. (Saved in your browser for now)',
            'board.search.placeholder': 'Search by title, content, or tags',
            'board.search.aria': 'Search questions',
            'board.form.titleNew': 'Create a question',
            'board.form.titleEdit': 'Edit question',
            'board.form.titleLabel': 'Title',
            'board.form.titlePlaceholder': 'e.g. Where to buy a transit card in Seoul?',
            'board.form.authorLabel': 'Author',
            'board.form.authorPlaceholder': 'Name or nickname',
            'board.form.tagsLabel': 'Tags',
            'board.form.tagsPlaceholder': 'e.g. transit, food, travel (comma separated)',
            'board.form.contentLabel': 'Content',
            'board.form.contentPlaceholder': 'Write your question here.',
            'board.form.submit': 'Post',
            'board.form.submitEdit': 'Save changes',
            'board.form.reset': 'Reset',
            'board.list.title': 'Questions',
            'board.list.count': '{count} items',
            'board.list.empty': 'No questions yet.',
            'board.detail.empty': 'Select a question to see details.',
            'board.list.metaAuthor': 'Author: {author}',
            'board.list.metaDate': '{date}',
            'board.list.metaComments': '{count} comments',
            'board.detail.author': 'Author: {author}',
            'board.detail.created': 'Created: {date}',
            'board.detail.updated': 'Last updated: {date}',
            'board.detail.comments': 'Comments ({count})',
            'board.detail.commentsEmpty': 'Be the first to comment.',
            'board.comment.authorPlaceholder': 'Name',
            'board.comment.contentPlaceholder': 'Write a comment',
            'board.comment.submit': 'Post comment',
            'board.actions.edit': 'Edit',
            'board.actions.delete': 'Delete',
            'board.hint.loggedIn': 'You are logged in. Share your question.',
            'board.hint.loggedOut': 'Log in to post a question. <a href="login.html">Login / Sign up</a>',
            'board.hint.editLocked': 'Log in to edit or delete.',
            'board.hint.commentLocked': 'Log in to leave a comment. <a href="login.html">Login / Sign up</a>',
            'board.error.loginRequiredPost': 'Log in to post a question.',
            'board.error.loginRequiredEdit': 'Log in to edit or delete.',
            'board.error.loginRequiredComment': 'Log in to leave a comment.',
            'board.error.requiredFields': 'Please fill in title, author, and content.',
            'board.error.requiredComment': 'Please enter your name and comment.',
            'board.loading': 'Saving...',
            'board.confirmDelete': 'Are you sure you want to delete this?',
            'footer.copy': '© 2023 Visit Korea. All Rights Reserved.'
        },
        ko: {
            'site.title': '한국에 오신 것을 환영합니다',
            'lang.label': '언어',
            'nav.about': '소개',
            'nav.culture': '문화',
            'nav.destinations': '여행지',
            'nav.board': '질문 게시판',
            'auth.required': '로그인 필요',
            'auth.loggedIn': '{name}님 로그인됨',
            'auth.open': '로그인 / 가입',
            'auth.logout': '로그아웃',
            'hero.title': '아름다운 나라, 한국에 오신 것을 환영합니다',
            'hero.subtitle': '역동적인 문화와 숨막히는 풍경을 발견해보세요.',
            'hero.cta': '더 알아보기',
            'about.title': '한국에 대하여',
            'about.body': '대한민국, 통칭 한국은 동아시아의 한반도 남부에 위치한 나라입니다. 활기찬 도시, 유구한 역사, 그리고 맛있는 음식으로 유명합니다.',
            'culture.title': '문화',
            'culture.kpop.title': 'K-팝',
            'culture.kpop.body': '전 세계를 휩쓴 한국 대중음악의 세계에 빠져보세요.',
            'culture.kpop.alt': 'K-팝 공연 사진',
            'culture.food.title': '한식',
            'culture.food.body': '김치와 불고기부터 비빔밥까지, 한국의 풍부하고 맛있는 음식을 경험해보세요.',
            'culture.food.alt': '비빔밥 한 그릇',
            'culture.history.title': '전통과 역사',
            'culture.history.body': '수천 년의 역사를 지닌 고궁과 사찰을 탐방하며 한국의 풍부한 유산을 발견해보세요.',
            'culture.history.alt': '경주의 불국사',
            'destinations.title': '인기 여행지',
            'destinations.seoul.title': '서울',
            'destinations.seoul.body': '활기찬 수도로, 현대적인 건축물과 유적지가 공존하는 도시입니다.',
            'destinations.seoul.alt': '서울',
            'destinations.busan.title': '부산',
            'destinations.busan.body': '아름다운 해변과 활기찬 시장으로 유명한 해안 도시입니다.',
            'destinations.busan.alt': '부산',
            'destinations.jeju.title': '제주도',
            'destinations.jeju.body': '독특한 화산 지형과 아름다운 해변으로 유명한 화산섬입니다.',
            'destinations.jeju.alt': '제주도',
            'destinations.moreCta': '더 알아보기',
            'destinations.moreHint': '한국의 다양한 도시를 골라 나만의 여정을 만들어보세요.',
            'cities.title': '한국의 더 많은 도시를 만나보세요',
            'cities.subtitle': '가고 싶은 도시를 선택해 나만의 여행 루트를 만들어보세요.',
            'cities.search.label': '도시 검색',
            'cities.search.placeholder': '도시 이름 또는 지역으로 검색',
            'cities.search.aria': '도시 검색',
            'cities.selectedLabel': '선택됨:',
            'cities.selectedEmpty': '아직 선택한 도시가 없습니다.',
            'cities.clear': '초기화',
            'cities.helper': '카드를 눌러 도시를 선택하세요. 여러 개를 선택할 수 있습니다.',
            'cities.map.title': '지도에서 보는 대도시',
            'cities.map.hint': '도시에 마우스를 올리거나 눌러 사진을 확인하세요.',
            'cities.map.aria': '한국 주요 도시 지도',
            'cities.map.preview.title': '도시 미리보기',
            'cities.map.preview.empty': '도시 핀을 올리거나 눌러 상세를 확인하세요.',
            'cities.map.seoul.desc': '도심의 에너지, 고궁, 먹거리 거리.',
            'cities.map.busan.desc': '바다, 항구 전망, 해산물 시장.',
            'cities.map.jeju.desc': '화산 지형과 해안 산책로.',
            'cities.map.incheon.desc': '모던한 워터프런트와 관문 도시.',
            'cities.map.daegu.desc': '카페 거리와 산이 어우러진 내륙 도시.',
            'cities.map.daejeon.desc': '과학과 공원이 공존하는 도시.',
            'cities.map.gwangju.desc': '예술과 미식이 살아있는 도시.',
            'cities.map.ulsan.desc': '바다 산책로와 산업 항구.',
            'cities.seoul.name': '서울',
            'cities.seoul.region': '수도권',
            'cities.seoul.aria': '서울 선택',
            'cities.busan.name': '부산',
            'cities.busan.region': '동남 해안',
            'cities.busan.aria': '부산 선택',
            'cities.jeju.name': '제주',
            'cities.jeju.region': '섬 여행',
            'cities.jeju.aria': '제주 선택',
            'cities.incheon.name': '인천',
            'cities.incheon.region': '서해 관문',
            'cities.incheon.aria': '인천 선택',
            'cities.daegu.name': '대구',
            'cities.daegu.region': '내륙 분지',
            'cities.daegu.aria': '대구 선택',
            'cities.daejeon.name': '대전',
            'cities.daejeon.region': '과학 도시',
            'cities.daejeon.aria': '대전 선택',
            'cities.gwangju.name': '광주',
            'cities.gwangju.region': '문화 도시',
            'cities.gwangju.aria': '광주 선택',
            'cities.ulsan.name': '울산',
            'cities.ulsan.region': '산업 항구',
            'cities.ulsan.aria': '울산 선택',
            'cities.suwon.name': '수원',
            'cities.suwon.region': '화성 성곽',
            'cities.suwon.aria': '수원 선택',
            'cities.sejong.name': '세종',
            'cities.sejong.region': '행정 도시',
            'cities.sejong.aria': '세종 선택',
            'cities.gangneung.name': '강릉',
            'cities.gangneung.region': '동해안',
            'cities.gangneung.aria': '강릉 선택',
            'cities.jeonju.name': '전주',
            'cities.jeonju.region': '한옥과 미식',
            'cities.jeonju.aria': '전주 선택',
            'cities.gyeongju.name': '경주',
            'cities.gyeongju.region': '고도',
            'cities.gyeongju.aria': '경주 선택',
            'cities.yeosu.name': '여수',
            'cities.yeosu.region': '남해안',
            'cities.yeosu.aria': '여수 선택',
            'cities.sokcho.name': '속초',
            'cities.sokcho.region': '설악산 관문',
            'cities.sokcho.aria': '속초 선택',
            'cities.andong.name': '안동',
            'cities.andong.region': '전통 문화',
            'cities.andong.aria': '안동 선택',
            'board.title': '질문 게시판',
            'board.subtitle': '궁금한 점을 남기면 누구나 답할 수 있어요. (현재는 브라우저에만 저장됩니다)',
            'board.search.placeholder': '제목, 내용, 태그로 검색',
            'board.search.aria': '질문 검색',
            'board.form.titleNew': '새 질문 등록',
            'board.form.titleEdit': '질문 수정',
            'board.form.titleLabel': '제목',
            'board.form.titlePlaceholder': '예: 서울에서 교통카드 어디서 사나요?',
            'board.form.authorLabel': '작성자',
            'board.form.authorPlaceholder': '이름 또는 닉네임',
            'board.form.tagsLabel': '태그',
            'board.form.tagsPlaceholder': '예: 교통, 음식, 여행 (콤마로 구분)',
            'board.form.contentLabel': '내용',
            'board.form.contentPlaceholder': '질문 내용을 입력해 주세요.',
            'board.form.submit': '등록',
            'board.form.submitEdit': '수정 완료',
            'board.form.reset': '초기화',
            'board.list.title': '질문 목록',
            'board.list.count': '{count}건',
            'board.list.empty': '등록된 질문이 없습니다.',
            'board.detail.empty': '질문을 선택하면 상세 내용이 표시됩니다.',
            'board.list.metaAuthor': '작성자: {author}',
            'board.list.metaDate': '{date}',
            'board.list.metaComments': '댓글 {count}개',
            'board.detail.author': '작성자: {author}',
            'board.detail.created': '작성일: {date}',
            'board.detail.updated': '마지막 수정: {date}',
            'board.detail.comments': '댓글 ({count})',
            'board.detail.commentsEmpty': '첫 댓글을 남겨보세요.',
            'board.comment.authorPlaceholder': '이름',
            'board.comment.contentPlaceholder': '댓글을 입력하세요',
            'board.comment.submit': '댓글 등록',
            'board.actions.edit': '수정',
            'board.actions.delete': '삭제',
            'board.hint.loggedIn': '로그인 상태입니다. 질문을 등록해 주세요.',
            'board.hint.loggedOut': '로그인 후 질문을 등록할 수 있어요. <a href="login.html">로그인/가입</a>',
            'board.hint.editLocked': '로그인 후 수정/삭제가 가능합니다.',
            'board.hint.commentLocked': '로그인 후 댓글을 남길 수 있어요. <a href="login.html">로그인/가입</a>',
            'board.error.loginRequiredPost': '로그인 후 질문을 등록할 수 있어요.',
            'board.error.loginRequiredEdit': '로그인 후 수정/삭제가 가능합니다.',
            'board.error.loginRequiredComment': '로그인 후 댓글을 남길 수 있어요.',
            'board.error.requiredFields': '제목, 작성자, 내용을 모두 입력해 주세요.',
            'board.error.requiredComment': '댓글 작성자와 내용을 입력해 주세요.',
            'board.loading': '처리 중...',
            'board.confirmDelete': '정말 삭제할까요?',
            'footer.copy': '© 2023 한국 방문. All Rights Reserved.'
        },
        ja: {
            'site.title': '韓国へようこそ',
            'lang.label': '言語',
            'nav.about': '紹介',
            'nav.culture': '文化',
            'nav.destinations': '旅行先',
            'nav.board': '質問掲示板',
            'auth.required': 'ログインが必要です',
            'auth.loggedIn': '{name}さんでログイン中',
            'auth.open': 'ログイン / 新規登録',
            'auth.logout': 'ログアウト',
            'hero.title': '美しい国、韓国へようこそ',
            'hero.subtitle': '活気ある文化と息をのむ景色を体験してください。',
            'hero.cta': 'もっと見る',
            'about.title': '韓国について',
            'about.body': '韓国は東アジアの朝鮮半島南部に位置する国です。活気ある都市、長い歴史、おいしい料理で知られています。',
            'culture.title': '文化',
            'culture.kpop.title': 'K-POP',
            'culture.kpop.body': '世界を席巻した韓国ポップ音楽の世界へ。',
            'culture.kpop.alt': 'K-POPダンスの公演',
            'culture.food.title': '韓国料理',
            'culture.food.body': 'キムチやプルコギからビビンバまで、豊かな味を楽しめます。',
            'culture.food.alt': 'ビビンバの丼',
            'culture.history.title': '伝統と歴史',
            'culture.history.body': '宮殿や寺院を巡り、韓国の遺産を発見しましょう。',
            'culture.history.alt': '慶州の仏国寺',
            'destinations.title': '人気の旅行先',
            'destinations.seoul.title': 'ソウル',
            'destinations.seoul.body': '現代的な建築と史跡が共存する活気ある首都です。',
            'destinations.seoul.alt': 'ソウル',
            'destinations.busan.title': '釜山',
            'destinations.busan.body': '美しい海辺と活気ある市場で有名な港町です。',
            'destinations.busan.alt': '釜山',
            'destinations.jeju.title': '済州島',
            'destinations.jeju.body': '独特な火山地形と美しい海岸で知られる火山島です。',
            'destinations.jeju.alt': '済州島',
            'destinations.moreCta': 'もっと見る',
            'destinations.moreHint': '韓国のさまざまな都市を選んで自分だけのルートを作りましょう。',
            'cities.title': '韓国のもっと多くの都市を探そう',
            'cities.subtitle': '行きたい都市を選んで、理想の旅のルートを作りましょう。',
            'cities.search.label': '都市検索',
            'cities.search.placeholder': '都市名または地域で検索',
            'cities.search.aria': '都市検索',
            'cities.selectedLabel': '選択済み:',
            'cities.selectedEmpty': 'まだ選択した都市はありません。',
            'cities.clear': 'クリア',
            'cities.helper': 'カードをクリックして都市を選択してください。複数選択できます。',
            'cities.map.title': '地図で見る主要都市',
            'cities.map.hint': '都市にカーソルを合わせるかタップすると写真が表示されます。',
            'cities.map.aria': '韓国の主要都市マップ',
            'cities.map.preview.title': '都市プレビュー',
            'cities.map.preview.empty': '都市ピンに触れると詳細が表示されます。',
            'cities.map.seoul.desc': '街のエネルギーと宮殿、食の通り。',
            'cities.map.busan.desc': 'ビーチと港の景色、海鮮市場。',
            'cities.map.jeju.desc': '火山地形と海岸トレイル。',
            'cities.map.incheon.desc': '近代的なウォーターフロントの玄関口。',
            'cities.map.daegu.desc': 'カフェ通りと緑の丘の内陸都市。',
            'cities.map.daejeon.desc': '科学と公園が共存する街。',
            'cities.map.gwangju.desc': 'アートとグルメの街。',
            'cities.map.ulsan.desc': '海辺の散歩道と産業港。',
            'cities.seoul.name': 'ソウル',
            'cities.seoul.region': '首都圏',
            'cities.seoul.aria': 'ソウルを選択',
            'cities.busan.name': '釜山',
            'cities.busan.region': '南東海岸',
            'cities.busan.aria': '釜山を選択',
            'cities.jeju.name': '済州',
            'cities.jeju.region': '島の休暇',
            'cities.jeju.aria': '済州を選択',
            'cities.incheon.name': '仁川',
            'cities.incheon.region': '西海岸の玄関口',
            'cities.incheon.aria': '仁川を選択',
            'cities.daegu.name': '大邱',
            'cities.daegu.region': '内陸盆地',
            'cities.daegu.aria': '大邱を選択',
            'cities.daejeon.name': '大田',
            'cities.daejeon.region': 'サイエンス拠点',
            'cities.daejeon.aria': '大田を選択',
            'cities.gwangju.name': '光州',
            'cities.gwangju.region': '文化都市',
            'cities.gwangju.aria': '光州を選択',
            'cities.ulsan.name': '蔚山',
            'cities.ulsan.region': '工業港',
            'cities.ulsan.aria': '蔚山を選択',
            'cities.suwon.name': '水原',
            'cities.suwon.region': '華城要塞',
            'cities.suwon.aria': '水原を選択',
            'cities.sejong.name': '世宗',
            'cities.sejong.region': '行政都市',
            'cities.sejong.aria': '世宗を選択',
            'cities.gangneung.name': '江陵',
            'cities.gangneung.region': '東海岸',
            'cities.gangneung.aria': '江陵を選択',
            'cities.jeonju.name': '全州',
            'cities.jeonju.region': '韓屋とグルメ',
            'cities.jeonju.aria': '全州を選択',
            'cities.gyeongju.name': '慶州',
            'cities.gyeongju.region': '古都',
            'cities.gyeongju.aria': '慶州を選択',
            'cities.yeosu.name': '麗水',
            'cities.yeosu.region': '南海岸',
            'cities.yeosu.aria': '麗水を選択',
            'cities.sokcho.name': '束草',
            'cities.sokcho.region': '雪岳山の玄関口',
            'cities.sokcho.aria': '束草を選択',
            'cities.andong.name': '安東',
            'cities.andong.region': '伝統文化',
            'cities.andong.aria': '安東を選択',
            'board.title': '質問掲示板',
            'board.subtitle': '質問を残せば誰でも回答できます。（現在はブラウザに保存）',
            'board.search.placeholder': 'タイトル・内容・タグで検索',
            'board.search.aria': '質問検索',
            'board.form.titleNew': '新規質問',
            'board.form.titleEdit': '質問を編集',
            'board.form.titleLabel': 'タイトル',
            'board.form.titlePlaceholder': '例：ソウルで交通カードはどこで買えますか？',
            'board.form.authorLabel': '作成者',
            'board.form.authorPlaceholder': '名前またはニックネーム',
            'board.form.tagsLabel': 'タグ',
            'board.form.tagsPlaceholder': '例：交通、食、旅行（カンマ区切り）',
            'board.form.contentLabel': '内容',
            'board.form.contentPlaceholder': '質問内容を入力してください。',
            'board.form.submit': '投稿',
            'board.form.submitEdit': '保存',
            'board.form.reset': 'リセット',
            'board.list.title': '質問一覧',
            'board.list.count': '{count}件',
            'board.list.empty': '質問がありません。',
            'board.detail.empty': '質問を選択すると詳細が表示されます。',
            'board.list.metaAuthor': '作成者: {author}',
            'board.list.metaDate': '{date}',
            'board.list.metaComments': 'コメント {count}件',
            'board.detail.author': '作成者: {author}',
            'board.detail.created': '作成日: {date}',
            'board.detail.updated': '最終更新: {date}',
            'board.detail.comments': 'コメント ({count})',
            'board.detail.commentsEmpty': '最初のコメントを残しましょう。',
            'board.comment.authorPlaceholder': '名前',
            'board.comment.contentPlaceholder': 'コメントを入力',
            'board.comment.submit': 'コメント投稿',
            'board.actions.edit': '編集',
            'board.actions.delete': '削除',
            'board.hint.loggedIn': 'ログイン中です。質問を投稿してください。',
            'board.hint.loggedOut': 'ログイン後に質問を投稿できます。<a href="login.html">ログイン / 新規登録</a>',
            'board.hint.editLocked': 'ログイン後に編集・削除が可能です。',
            'board.hint.commentLocked': 'ログイン後にコメントできます。<a href="login.html">ログイン / 新規登録</a>',
            'board.error.loginRequiredPost': 'ログイン後に質問を投稿できます。',
            'board.error.loginRequiredEdit': 'ログイン後に編集・削除が可能です。',
            'board.error.loginRequiredComment': 'ログイン後にコメントできます。',
            'board.error.requiredFields': 'タイトル、作成者、内容を入力してください。',
            'board.error.requiredComment': '名前とコメントを入力してください。',
            'board.loading': '処理中...',
            'board.confirmDelete': '本当に削除しますか？',
            'footer.copy': '© 2023 韓国訪問. All Rights Reserved.'
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
    window.translate = translate;
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
        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            const key = el.dataset.i18nAlt;
            if (key) {
                el.setAttribute('alt', translate(key));
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.dataset.i18nAria;
            if (key) {
                el.setAttribute('aria-label', translate(key));
            }
        });
    };

    const authStorageKey = 'auth-demo-v1';
    const authOpenButton = document.querySelector('#auth-open');
    const authLogoutButton = document.querySelector('#auth-logout');
    const authStatus = document.querySelector('#auth-status');
    const languageSelect = document.querySelector('#lang-select');

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

    const setAuthUI = (user) => {
        if (authStatus) {
            authStatus.textContent = user
                ? translate('auth.loggedIn', { name: user.name })
                : translate('auth.required');
        }
        if (authOpenButton) {
            authOpenButton.classList.toggle('hidden', Boolean(user));
        }
        if (authLogoutButton) {
            authLogoutButton.classList.toggle('hidden', !user);
        }
    };

    let currentUser = loadAuth();
    applyTranslations();
    setAuthUI(currentUser);
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
            setAuthUI(currentUser);
            setBoardAuthState(currentUser);
            setFormMode(Boolean(editingIdInput?.value));
            renderList();
            renderDetail();
        });
    }

    if (authLogoutButton) {
        authLogoutButton.addEventListener('click', () => {
            saveAuth(null);
            currentUser = null;
            setAuthUI(null);
            renderDetail();
            setBoardAuthState(null);
        });
    }

    const storageKey = 'question-board-v1';
    const form = document.querySelector('#board-form');
    const formTitle = form?.querySelector('h3');
    const submitButton = form?.querySelector('button[type="submit"]');
    const editingIdInput = document.querySelector('#board-editing-id');
    const titleInput = document.querySelector('#board-title');
    const authorInput = document.querySelector('#board-author');
    const tagsInput = document.querySelector('#board-tags');
    const contentInput = document.querySelector('#board-content');
    const authHint = document.querySelector('#board-auth-hint');
    const boardError = document.querySelector('#board-error');
    const searchInput = document.querySelector('#board-search');
    const listEl = document.querySelector('#board-items');
    const countEl = document.querySelector('#board-count');
    const detailEl = document.querySelector('#board-detail-content');

    if (!form || !listEl || !detailEl) {
        return;
    }

    const state = {
        posts: [],
        selectedId: null,
        query: ''
    };

    const showBoardError = (message) => {
        if (boardError) {
            boardError.textContent = message || '';
            boardError.classList.toggle('visible', Boolean(message));
        }
    };

    const setBoardAuthState = (user) => {
        if (!form) {
            return;
        }
        const isLoggedIn = Boolean(user);
        const formControls = form.querySelectorAll('input, textarea, button');
        formControls.forEach((control) => {
            if (control.id === 'board-editing-id') {
                return;
            }
            control.disabled = !isLoggedIn;
        });
        if (isLoggedIn && authorInput && !editingIdInput.value) {
            authorInput.value = user.name || authorInput.value;
        }
        if (authHint) {
            authHint.innerHTML = isLoggedIn
                ? translate('board.hint.loggedIn')
                : translate('board.hint.loggedOut');
            authHint.classList.toggle('is-warning', !isLoggedIn);
        }
        showBoardError('');
    };

    const escapeHTML = (value) => {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        if (Number.isNaN(date.getTime())) {
            return '';
        }
        return date.toLocaleString(localeMap[currentLanguage] || 'en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    };

    const seedPosts = () => {
        const seedByLang = {
            en: [
                {
                    title: 'Where can I buy a transit card?',
                    author: 'Traveler',
                    tags: ['transit', 'seoul'],
                    content: 'First time visiting — where can I buy a transit card?',
                    comments: [
                        {
                            author: 'Local',
                            content: 'You can get one at convenience stores inside subway stations.'
                        }
                    ]
                },
                {
                    title: 'Jeju recommendations for a one-day trip',
                    author: 'Mina',
                    tags: ['travel', 'jeju'],
                    content: 'Planning a one-day rental car route — any must-see spots?',
                    comments: []
                }
            ],
            ko: [
                {
                    title: '교통카드 어디서 사나요?',
                    author: '여행자',
                    tags: ['교통', '서울'],
                    content: '처음 방문이라 교통카드를 어디서 사야 하는지 궁금해요.',
                    comments: [
                        {
                            author: '현지인',
                            content: '지하철역 편의점에서 바로 살 수 있어요!'
                        }
                    ]
                },
                {
                    title: '제주도에서 꼭 가볼만한 곳 추천해주세요',
                    author: '미소',
                    tags: ['여행', '제주'],
                    content: '렌트카로 하루 코스를 계획 중인데, 추천지가 있을까요?',
                    comments: []
                }
            ],
            ja: [
                {
                    title: '交通カードはどこで買えますか？',
                    author: '旅行者',
                    tags: ['交通', 'ソウル'],
                    content: '初めて訪問します。交通カードはどこで買えますか？',
                    comments: [
                        {
                            author: '地元',
                            content: '地下鉄駅のコンビニで買えますよ。'
                        }
                    ]
                },
                {
                    title: '済州島のおすすめスポットを教えてください',
                    author: 'ミナ',
                    tags: ['旅行', '済州'],
                    content: 'レンタカーで1日コースを計画中です。おすすめはありますか？',
                    comments: []
                }
            ]
        };
        const seeds = seedByLang[currentLanguage] || seedByLang.en;
        return seeds.map((seed, index) => {
            const createdAt = new Date(Date.now() - index * 86400000).toISOString();
            return {
                id: crypto.randomUUID(),
                title: seed.title,
                author: seed.author,
                tags: seed.tags,
                content: seed.content,
                createdAt,
                updatedAt: createdAt,
                comments: (seed.comments || []).map((comment) => ({
                    id: crypto.randomUUID(),
                    author: comment.author,
                    content: comment.content,
                    createdAt
                }))
            };
        });
    };

    const loadData = () => {
        const raw = localStorage.getItem(storageKey);
        if (!raw) {
            state.posts = seedPosts();
            saveData();
            return;
        }
        try {
            const parsed = JSON.parse(raw);
            state.posts = Array.isArray(parsed?.posts) ? parsed.posts : [];
        } catch (error) {
            state.posts = seedPosts();
        }
    };

    const saveData = () => {
        localStorage.setItem(storageKey, JSON.stringify({ posts: state.posts }));
    };

    const setFormMode = (isEditing) => {
        formTitle.textContent = isEditing
            ? translate('board.form.titleEdit')
            : translate('board.form.titleNew');
        submitButton.textContent = isEditing
            ? translate('board.form.submitEdit')
            : translate('board.form.submit');
    };

    const resetForm = () => {
        editingIdInput.value = '';
        form.reset();
        setFormMode(false);
    };

    const getFilteredPosts = () => {
        const keyword = state.query.trim().toLowerCase();
        const sorted = [...state.posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (!keyword) {
            return sorted;
        }
        return sorted.filter((post) => {
            const haystack = [
                post.title,
                post.content,
                post.author,
                ...(post.tags || [])
            ].join(' ').toLowerCase();
            return haystack.includes(keyword);
        });
    };

    const renderList = () => {
        const posts = getFilteredPosts();
        countEl.textContent = translate('board.list.count', { count: posts.length });
        if (!posts.length) {
            listEl.innerHTML = `<li class="board-empty">${translate('board.list.empty')}</li>`;
            return;
        }
        listEl.innerHTML = posts.map((post) => {
            const isActive = post.id === state.selectedId;
            const tags = (post.tags || []).map((tag) => `<span class="board-tag">${escapeHTML(tag)}</span>`).join('');
            return `
                <li class="board-item ${isActive ? 'active' : ''}" data-id="${post.id}" tabindex="0" role="button" aria-pressed="${isActive}">
                    <h4>${escapeHTML(post.title)}</h4>
                    <div class="board-meta">
                        <span>${translate('board.list.metaAuthor', { author: escapeHTML(post.author) })}</span>
                        <span>${translate('board.list.metaDate', { date: formatDate(post.createdAt) })}</span>
                        <span>${translate('board.list.metaComments', { count: post.comments?.length || 0 })}</span>
                    </div>
                    <div class="board-tags">${tags}</div>
                </li>
            `;
        }).join('');
    };

    const renderDetail = () => {
        const post = state.posts.find((item) => item.id === state.selectedId);
        if (!post) {
            detailEl.innerHTML = `<p class="board-empty">${translate('board.detail.empty')}</p>`;
            return;
        }

        const tags = (post.tags || []).map((tag) => `<span class="board-tag">${escapeHTML(tag)}</span>`).join('');
        const comments = (post.comments || []).map((comment) => `
            <div class="comment-item">
                <div class="comment-meta">${escapeHTML(comment.author)} · ${formatDate(comment.createdAt)}</div>
                <div>${escapeHTML(comment.content)}</div>
            </div>
        `).join('');
        const canEdit = Boolean(currentUser);
        const actionButtons = canEdit
            ? `
            <div class="board-detail-actions">
                <button class="edit" data-action="edit">${translate('board.actions.edit')}</button>
                <button class="delete" data-action="delete">${translate('board.actions.delete')}</button>
            </div>
            `
            : `<p class="board-auth-hint is-warning">${translate('board.hint.editLocked')}</p>`;
        const commentForm = currentUser
            ? `
                <form class="comment-form" data-action="comment">
                    <input type="text" name="comment-author" placeholder="${translate('board.comment.authorPlaceholder')}" required>
                    <textarea name="comment-content" rows="3" placeholder="${translate('board.comment.contentPlaceholder')}" required></textarea>
                    <button type="submit">${translate('board.comment.submit')}</button>
                </form>
            `
            : `<p class="board-auth-hint is-warning">${translate('board.hint.commentLocked')}</p>`;

        detailEl.innerHTML = `
            <h4>${escapeHTML(post.title)}</h4>
            <div class="board-meta">
                <span>${translate('board.detail.author', { author: escapeHTML(post.author) })}</span>
                <span>${translate('board.detail.created', { date: formatDate(post.createdAt) })}</span>
                <span>${translate('board.detail.updated', { date: formatDate(post.updatedAt) })}</span>
            </div>
            <div class="board-tags">${tags}</div>
            <p>${escapeHTML(post.content).replace(/\n/g, '<br>')}</p>
            ${actionButtons}
            <div class="board-comments">
                <h5>${translate('board.detail.comments', { count: post.comments?.length || 0 })}</h5>
                ${comments || `<p class="board-empty">${translate('board.detail.commentsEmpty')}</p>`}
                ${commentForm}
            </div>
        `;
    };

    const selectPost = (id) => {
        state.selectedId = id;
        renderList();
        renderDetail();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        showBoardError('');
        if (!currentUser) {
            showBoardError(translate('board.error.loginRequiredPost'));
            return;
        }
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();
        const tags = tagsInput.value.split(',')
            .map((tag) => tag.trim())
            .filter(Boolean);

        if (!title || !author || !content) {
            showBoardError(translate('board.error.requiredFields'));
            return;
        }

        const editingId = editingIdInput.value;
        if (editingId) {
            const post = state.posts.find((item) => item.id === editingId);
            if (post) {
                post.title = title;
                post.author = author;
                post.tags = tags;
                post.content = content;
                post.updatedAt = new Date().toISOString();
            }
            state.selectedId = editingId;
        } else {
            const newPost = {
                id: crypto.randomUUID(),
                title,
                author,
                tags,
                content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                comments: []
            };
            state.posts.unshift(newPost);
            state.selectedId = newPost.id;
        }

        saveData();
        resetForm();
        renderList();
        renderDetail();

        if (submitButton) {
            const originalText = submitButton.textContent;
            submitButton.textContent = translate('board.loading');
            submitButton.disabled = true;
            window.setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 400);
        }
    });

    form.addEventListener('reset', () => {
        editingIdInput.value = '';
        setFormMode(false);
        showBoardError('');
    });

    form.addEventListener('input', () => {
        showBoardError('');
    });

    listEl.addEventListener('click', (event) => {
        const item = event.target.closest('.board-item');
        if (!item) {
            return;
        }
        selectPost(item.dataset.id);
    });

    listEl.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') {
            return;
        }
        const item = event.target.closest('.board-item');
        if (item) {
            selectPost(item.dataset.id);
        }
    });

    detailEl.addEventListener('click', (event) => {
        const actionButton = event.target.closest('[data-action]');
        if (!actionButton) {
            return;
        }
        if (!currentUser) {
            showBoardError(translate('board.error.loginRequiredEdit'));
            return;
        }
        const action = actionButton.dataset.action;
        const post = state.posts.find((item) => item.id === state.selectedId);
        if (!post) {
            return;
        }
        if (action === 'edit') {
            editingIdInput.value = post.id;
            titleInput.value = post.title;
            authorInput.value = post.author;
            tagsInput.value = (post.tags || []).join(', ');
            contentInput.value = post.content;
            setFormMode(true);
            form.scrollIntoView({ behavior: 'smooth' });
        }
        if (action === 'delete') {
            const confirmed = confirm(translate('board.confirmDelete'));
            if (!confirmed) {
                return;
            }
            state.posts = state.posts.filter((item) => item.id !== post.id);
            state.selectedId = state.posts[0]?.id || null;
            saveData();
            renderList();
            renderDetail();
            resetForm();
        }
    });

    detailEl.addEventListener('submit', (event) => {
        const formEl = event.target.closest('form[data-action="comment"]');
        if (!formEl) {
            return;
        }
        event.preventDefault();
        if (!currentUser) {
            showBoardError(translate('board.error.loginRequiredComment'));
            return;
        }
        const post = state.posts.find((item) => item.id === state.selectedId);
        if (!post) {
            return;
        }
        const author = formEl.querySelector('input[name="comment-author"]').value.trim();
        const content = formEl.querySelector('textarea[name="comment-content"]').value.trim();
        if (!author || !content) {
            showBoardError(translate('board.error.requiredComment'));
            return;
        }
        post.comments = post.comments || [];
        post.comments.unshift({
            id: crypto.randomUUID(),
            author,
            content,
            createdAt: new Date().toISOString()
        });
        post.updatedAt = new Date().toISOString();
        saveData();
        renderList();
        renderDetail();
    });

    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            state.query = event.target.value;
            renderList();
        });
    }

    setBoardAuthState(currentUser);
    loadData();
    state.selectedId = state.posts[0]?.id || null;
    renderList();
    renderDetail();
});
