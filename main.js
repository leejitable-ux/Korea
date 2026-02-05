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
            'site.title': 'Korea Local',
            'lang.label': 'Language',
            'nav.about': 'About',
            'nav.culture': 'Culture',
            'nav.destinations': 'Destinations',
            'nav.board': 'Ask a local',
            'brand.name': 'Korea Local',
            'brand.tagline': 'Korean answers, tailored routes, travel buddy',
            'auth.required': 'Login required',
            'auth.loggedIn': 'Logged in as {name}',
            'auth.open': 'Login / Sign up',
            'auth.logout': 'Log out',
            'hero.eyebrow': 'For travelers who want a Korean inside view',
            'hero.title': 'Plan Korea with a real local',
            'hero.subtitle': 'We answer in Korean context, design your route, and can even travel with you.',
            'hero.cta': 'Ask a Local',
            'hero.ctaSecondary': 'See how it works',
            'hero.search.title': 'Start with your vibe',
            'hero.search.place.label': 'Where do you want to go?',
            'hero.search.place.placeholder': 'Seoul, Jeju, Busan...',
            'hero.search.style.label': 'Travel style',
            'hero.search.style.placeholder': 'Food, culture, nature',
            'hero.search.days.label': 'Trip length',
            'hero.search.days.placeholder': 'e.g. 4 days',
            'hero.search.button': 'Build my draft plan',
            'hero.chip1': 'Night markets',
            'hero.chip2': 'Hanok stays',
            'hero.chip3': 'Cafes',
            'hero.chip4': 'K-hip neighborhoods',
            'hero.panel.title': 'Sample 3-day Seoul + Gyeongju',
            'hero.panel.item1': 'Day 1: Palace morning, Ikseon-dong lunch, night market',
            'hero.panel.item2': 'Day 2: Local coffee alleys, river walk, live music',
            'hero.panel.item3': 'Day 3: KTX to Gyeongju, temple sunset, hanok stay',
            'hero.panel.badge': 'Built by Korean locals',
            'hero.panel.badge2': 'Optional companion',
            'hero.panel.altTitle': 'Ask in Korean, get it in your language',
            'hero.panel.altBody': 'We pull local-only recommendations, verify what is open, and send you a clean plan.',
            'hero.panel.altBadge': '24-hour reply',
            'ask.pageTitle': 'Ask a Local - Korea',
            'ask.eyebrow': 'Ask Korea, get a local answer',
            'ask.title': 'Send your question by email',
            'ask.subtitle': 'A Korean local will research and summarize your Korea-related questions within 24 hours.',
            'ask.cta': 'Email your question',
            'ask.email': 'ask@korea.local',
            'ask.card.title': 'What we can help with',
            'ask.card.item1': 'Trip planning, routes, and transport tips',
            'ask.card.item2': 'Local food, markets, and must-try spots',
            'ask.card.item3': 'Culture questions and etiquette guidance',
            'ask.steps.title1': 'Step 1',
            'ask.steps.body1': 'Email your question with your travel dates, budget, and preferences.',
            'ask.steps.title2': 'Step 2',
            'ask.steps.body2': 'We ask Korean locals to gather the latest tips and options.',
            'ask.steps.title3': 'Step 3',
            'ask.steps.body3': 'Receive a clear summary by email within 24 hours.',
            'ask.note.title': 'Get help from locals',
            'ask.note.body': 'Plan your Korea trip with local insights. Ask anything from \"Where should I stay?\" to \"What is the best 3-day route?\"',
            'about.title': 'Your Korea, guided by Koreans',
            'about.body': 'We are Korean locals who answer in Korean sources, shape a route around your pace, and can join as a travel buddy when you want company.',
            'about.stat1.value': '24h',
            'about.stat1.label': 'Average response time',
            'about.stat2.value': '1:1',
            'about.stat2.label': 'Local planner match',
            'about.stat3.value': 'On-trip',
            'about.stat3.label': 'Companion option',
            'feature.answer.title': 'Korean answers',
            'feature.answer.body': 'We read Korean blogs, local maps, and regional updates, then translate what matters.',
            'feature.plan.title': 'Custom plan',
            'feature.plan.body': 'Tell us your dates and budget. We build a plan you can actually follow.',
            'feature.companion.title': 'Travel companion',
            'feature.companion.body': 'If you want, we join part of your trip as a local friend and translator.',
            'culture.title': 'Local experiences worth crossing town for',
            'culture.subtitle': 'We focus on real neighborhoods, slow mornings, and night energy locals love.',
            'culture.market.title': 'Market breakfast',
            'culture.market.body': 'Start the day with bindaetteok, mayak gimbap, and local coffee.',
            'culture.market.alt': 'Gwangjang market food',
            'culture.neighborhood.title': 'Neighborhood walks',
            'culture.neighborhood.body': 'Hidden alleys, design shops, and vintage markets you will not find on big tours.',
            'culture.neighborhood.alt': 'Neighborhood alley',
            'culture.nature.title': 'Nature day trips',
            'culture.nature.body': 'We pair bus schedules, trail timing, and local meals so the day flows.',
            'culture.nature.alt': 'Seoraksan mountain',
            'destinations.title': 'Where to go first',
            'destinations.subtitle': 'Pick a base city and we will design the best day-to-day flow.',
            'destinations.seoul.title': 'Seoul',
            'destinations.seoul.body': 'Neighborhood-hopping, palaces, and the best late-night streets.',
            'destinations.seoul.alt': 'Seoul',
            'destinations.seoul.tag': 'Urban energy',
            'destinations.busan.title': 'Busan',
            'destinations.busan.body': 'Harbor views, seafood markets, and coastal cafes.',
            'destinations.busan.alt': 'Busan',
            'destinations.busan.tag': 'Coastal reset',
            'destinations.jeju.title': 'Jeju',
            'destinations.jeju.body': 'Volcanic landscapes, ocean drives, and slow villages.',
            'destinations.jeju.alt': 'Jeju',
            'destinations.jeju.tag': 'Island escape',
            'destinations.moreCta': 'Explore more cities',
            'destinations.moreHint': 'Build a multi-city plan with a Korean local.',
            'process.title': 'How it works',
            'process.subtitle': 'We move fast, keep it local, and stay with you if you want.',
            'process.step1.title': '1. Share your dates',
            'process.step1.body': 'Tell us when, budget, and what you love. Short form, no fluff.',
            'process.step2.title': '2. We plan in Korean',
            'process.step2.body': 'We pull local-only data, verify hours, and map a route that flows.',
            'process.step3.title': '3. Travel with support',
            'process.step3.body': 'Get the plan, ask follow-ups, and request a travel buddy.',
            'companion.title': 'Want a local buddy in Korea?',
            'companion.body': 'We can join for a day or two as a friendly guide and translator. Match by language and interest.',
            'companion.cta': 'Request a companion',
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
            'footer.copy': '© 2026 Korea Local. All Rights Reserved.'
        },
        ko: {
            'site.title': '코리아 로컬',
            'lang.label': '언어',
            'nav.about': '소개',
            'nav.culture': '문화',
            'nav.destinations': '여행지',
            'nav.board': '질문하기',
            'brand.name': '코리아 로컬',
            'brand.tagline': '한국인이 답하고, 일정까지, 동행까지',
            'auth.required': '로그인 필요',
            'auth.loggedIn': '{name}님 로그인됨',
            'auth.open': '로그인 / 가입',
            'auth.logout': '로그아웃',
            'hero.eyebrow': '한국 현지 감각을 원하는 여행자를 위해',
            'hero.title': '한국을 현지인과 함께 계획하세요',
            'hero.subtitle': '한국어 자료로 답하고, 루트를 짜며, 원하면 동행도 합니다.',
            'hero.cta': '현지인에게 질문',
            'hero.ctaSecondary': '진행 방식 보기',
            'hero.search.title': '당신의 여행 감성부터',
            'hero.search.place.label': '어디로 가고 싶나요?',
            'hero.search.place.placeholder': '서울, 제주, 부산...',
            'hero.search.style.label': '여행 스타일',
            'hero.search.style.placeholder': '맛집, 문화, 자연',
            'hero.search.days.label': '여행 기간',
            'hero.search.days.placeholder': '예: 4일',
            'hero.search.button': '초안 일정 만들기',
            'hero.chip1': '야시장',
            'hero.chip2': '한옥 숙소',
            'hero.chip3': '카페',
            'hero.chip4': '요즘 동네',
            'hero.panel.title': '서울 + 경주 3일 예시',
            'hero.panel.item1': '1일차: 궁궐 아침, 익선동 점심, 야시장',
            'hero.panel.item2': '2일차: 동네 카페골목, 강변 산책, 라이브 음악',
            'hero.panel.item3': '3일차: KTX 경주, 사찰 석양, 한옥 숙박',
            'hero.panel.badge': '현지인이 만든 루트',
            'hero.panel.badge2': '동행 옵션',
            'hero.panel.altTitle': '한국어로 물어보고, 원하는 언어로 받기',
            'hero.panel.altBody': '로컬 추천을 모아 영업 여부까지 확인하고 깔끔한 플랜으로 전달합니다.',
            'hero.panel.altBadge': '24시간 답변',
            'ask.pageTitle': '현지인에게 질문하기 - 한국',
            'ask.eyebrow': '현지인이 답해드립니다',
            'ask.title': '메일로 질문을 보내주세요',
            'ask.subtitle': '한국인이 24시간 이내에 한국 관련 질문을 조사해 정리해드립니다.',
            'ask.cta': '메일로 질문 보내기',
            'ask.email': 'ask@korea.local',
            'ask.card.title': '도와드릴 수 있는 것들',
            'ask.card.item1': '여행 일정, 루트, 이동 수단 팁',
            'ask.card.item2': '현지 맛집, 시장, 꼭 가볼 곳',
            'ask.card.item3': '문화/예절과 생활 정보',
            'ask.steps.title1': 'Step 1',
            'ask.steps.body1': '여행 날짜, 예산, 취향과 함께 질문을 메일로 보내세요.',
            'ask.steps.title2': 'Step 2',
            'ask.steps.body2': '현지인에게 최신 정보와 추천을 확인합니다.',
            'ask.steps.title3': 'Step 3',
            'ask.steps.body3': '24시간 이내에 정리된 답변을 메일로 보내드립니다.',
            'ask.note.title': '현지인의 도움을 받아보세요',
            'ask.note.body': '한국 여행 궁금증과 여행 계획 수립을 현지 인사이트로 도와드립니다. \"어디에 숙소를 잡아야 하나요?\"부터 \"3일 코스 추천\"까지 무엇이든 물어보세요.',
            'about.title': '한국, 현지인이 안내합니다',
            'about.body': '한국 현지인이 한국어 자료로 답하고, 당신의 속도에 맞춰 루트를 설계하며, 원하면 여행 친구로 함께합니다.',
            'about.stat1.value': '24h',
            'about.stat1.label': '평균 답변 시간',
            'about.stat2.value': '1:1',
            'about.stat2.label': '현지 플래너 매칭',
            'about.stat3.value': '동행',
            'about.stat3.label': '현지 동행 옵션',
            'feature.answer.title': '한국어 기반 답변',
            'feature.answer.body': '한국어 블로그, 로컬 지도, 지역 소식을 확인해 핵심만 번역합니다.',
            'feature.plan.title': '맞춤 일정',
            'feature.plan.body': '여행 날짜와 예산을 알려주면 따라 하기 쉬운 동선을 구성합니다.',
            'feature.companion.title': '여행 동행',
            'feature.companion.body': '원하면 일정 일부를 현지 친구 겸 통역으로 함께합니다.',
            'culture.title': '멀리 와도 가치 있는 로컬 경험',
            'culture.subtitle': '동네의 아침, 느린 산책, 밤의 에너지를 담았습니다.',
            'culture.market.title': '시장 아침',
            'culture.market.body': '빈대떡, 마약김밥, 로컬 커피로 하루를 시작하세요.',
            'culture.market.alt': '광장시장 음식',
            'culture.neighborhood.title': '동네 산책',
            'culture.neighborhood.body': '대형 투어에서는 보기 힘든 골목, 편집숍, 빈티지 마켓.',
            'culture.neighborhood.alt': '동네 골목',
            'culture.nature.title': '자연 당일치기',
            'culture.nature.body': '버스 시간과 트레일 동선을 묶어 매끄럽게 구성합니다.',
            'culture.nature.alt': '설악산 풍경',
            'destinations.title': '어디부터 갈까요',
            'destinations.subtitle': '거점 도시를 고르면 하루 동선을 만들어드립니다.',
            'destinations.seoul.title': '서울',
            'destinations.seoul.body': '동네 이동, 궁궐, 밤거리까지.',
            'destinations.seoul.alt': '서울',
            'destinations.seoul.tag': '도시 에너지',
            'destinations.busan.title': '부산',
            'destinations.busan.body': '항구 뷰, 해산물 시장, 해변 카페.',
            'destinations.busan.alt': '부산',
            'destinations.busan.tag': '바다 리셋',
            'destinations.jeju.title': '제주',
            'destinations.jeju.body': '화산 지형, 드라이브, 느린 마을.',
            'destinations.jeju.alt': '제주',
            'destinations.jeju.tag': '섬 휴식',
            'destinations.moreCta': '도시 더 보기',
            'destinations.moreHint': '현지인과 다도시 플랜을 완성하세요.',
            'process.title': '진행 방식',
            'process.subtitle': '빠르게, 로컬하게, 원하면 동행까지.',
            'process.step1.title': '1. 일정 공유',
            'process.step1.body': '날짜, 예산, 취향을 알려주세요. 짧고 간단하게.',
            'process.step2.title': '2. 한국어로 조사',
            'process.step2.body': '로컬 정보와 영업 여부를 확인하고 동선을 설계합니다.',
            'process.step3.title': '3. 여행 지원',
            'process.step3.body': '플랜 제공, 추가 질문, 동행 요청까지.',
            'companion.title': '한국에서 현지 친구가 필요하신가요?',
            'companion.body': '하루나 이틀, 가이드 겸 통역으로 함께할 수 있습니다.',
            'companion.cta': '동행 요청',
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
            'footer.copy': '© 2026 코리아 로컬. All Rights Reserved.'
        },
        ja: {
            'site.title': 'Korea Local',
            'lang.label': '言語',
            'nav.about': '紹介',
            'nav.culture': '文化',
            'nav.destinations': '旅行先',
            'nav.board': '質問する',
            'brand.name': 'Korea Local',
            'brand.tagline': '韓国人が答え、旅程まで、同行まで',
            'auth.required': 'ログインが必要です',
            'auth.loggedIn': '{name}さんでログイン中',
            'auth.open': 'ログイン / 新規登録',
            'auth.logout': 'ログアウト',
            'hero.eyebrow': '韓国ローカル視点が欲しい旅人へ',
            'hero.title': '韓国を本当のローカルと計画しよう',
            'hero.subtitle': '韓国語情報で答え、ルートを組み、希望すれば同行も。',
            'hero.cta': '現地に質問',
            'hero.ctaSecondary': '仕組みを見る',
            'hero.search.title': 'まずはあなたの旅の雰囲気から',
            'hero.search.place.label': 'どこへ行きたい？',
            'hero.search.place.placeholder': 'ソウル、済州、釜山...',
            'hero.search.style.label': '旅行スタイル',
            'hero.search.style.placeholder': 'グルメ、文化、自然',
            'hero.search.days.label': '旅行日数',
            'hero.search.days.placeholder': '例: 4日',
            'hero.search.button': 'ドラフトプランを作成',
            'hero.chip1': '夜市',
            'hero.chip2': '韓屋ステイ',
            'hero.chip3': 'カフェ',
            'hero.chip4': 'トレンド街',
            'hero.panel.title': 'ソウル＋慶州 3日プラン例',
            'hero.panel.item1': '1日目: 宮殿の朝、益善洞ランチ、夜市',
            'hero.panel.item2': '2日目: ローカルカフェ通り、川沿い散歩、ライブ音楽',
            'hero.panel.item3': '3日目: KTXで慶州、寺の夕景、韓屋ステイ',
            'hero.panel.badge': '韓国ローカルが作成',
            'hero.panel.badge2': '同行オプション',
            'hero.panel.altTitle': '韓国語で聞いて、あなたの言語で受け取る',
            'hero.panel.altBody': 'ローカル推薦を集め、営業状況を確認して整理したプランを届けます。',
            'hero.panel.altBadge': '24時間返信',
            'ask.pageTitle': '現地の人に聞く - 韓国',
            'ask.eyebrow': '韓国の現地目線で回答',
            'ask.title': 'メールで質問を送ってください',
            'ask.subtitle': '韓国の現地の人が24時間以内に調べてまとめます。',
            'ask.cta': 'メールで質問する',
            'ask.email': 'ask@korea.local',
            'ask.card.title': 'お手伝いできること',
            'ask.card.item1': '旅程づくり、ルート、移動のコツ',
            'ask.card.item2': 'ローカルグルメ、市場、必見スポット',
            'ask.card.item3': '文化・マナーに関する質問',
            'ask.steps.title1': 'Step 1',
            'ask.steps.body1': '旅行日程、予算、好みと一緒に質問を送ってください。',
            'ask.steps.title2': 'Step 2',
            'ask.steps.body2': '現地の人が最新の情報と選択肢を集めます。',
            'ask.steps.title3': 'Step 3',
            'ask.steps.body3': '24時間以内に整理した回答をメールでお届けします。',
            'ask.note.title': '現地の人の力を借りよう',
            'ask.note.body': '韓国に関する疑問や旅行計画をローカル視点でサポートします。「どこに泊まるべき？」から「3日間のおすすめルート」まで、気軽に聞いてください。',
            'about.title': '韓国は、韓国人が案内',
            'about.body': '韓国ローカルが韓国語資料で答え、ペースに合わせてルートを設計し、希望があれば旅の友として同行します。',
            'about.stat1.value': '24h',
            'about.stat1.label': '平均返信時間',
            'about.stat2.value': '1:1',
            'about.stat2.label': 'ローカルプランナー',
            'about.stat3.value': '同行',
            'about.stat3.label': '同行オプション',
            'feature.answer.title': '韓国語ベースの回答',
            'feature.answer.body': '韓国語ブログやローカルマップ、地域情報を読み、要点だけ翻訳します。',
            'feature.plan.title': 'カスタムプラン',
            'feature.plan.body': '日程と予算を教えてくれれば、実行しやすい動線を作ります。',
            'feature.companion.title': '旅行同行',
            'feature.companion.body': '希望があれば一部日程で通訳も兼ねて同行します。',
            'culture.title': '遠回りしても行く価値のある体験',
            'culture.subtitle': '近所の朝、ゆっくり散歩、夜の熱量を大切に。',
            'culture.market.title': '市場の朝ごはん',
            'culture.market.body': 'ピンダエトッ、麻薬キンパ、ローカルコーヒーでスタート。',
            'culture.market.alt': '広蔵市場の食',
            'culture.neighborhood.title': '路地の散歩',
            'culture.neighborhood.body': '大手ツアーでは見つからない路地やショップ、ヴィンテージ市。',
            'culture.neighborhood.alt': '路地の風景',
            'culture.nature.title': '自然の日帰り旅',
            'culture.nature.body': 'バス時間とトレイルを組み合わせてスムーズに。',
            'culture.nature.alt': '雪岳山の景色',
            'destinations.title': '最初の拠点はどこにする？',
            'destinations.subtitle': '拠点都市を選べば、毎日の動線を設計します。',
            'destinations.seoul.title': 'ソウル',
            'destinations.seoul.body': '街歩き、宮殿、夜の通りまで。',
            'destinations.seoul.alt': 'ソウル',
            'destinations.seoul.tag': '都市のエネルギー',
            'destinations.busan.title': '釜山',
            'destinations.busan.body': '港の景色、海鮮市場、海沿いカフェ。',
            'destinations.busan.alt': '釜山',
            'destinations.busan.tag': '海辺リセット',
            'destinations.jeju.title': '済州',
            'destinations.jeju.body': '火山地形、海沿いドライブ、静かな村。',
            'destinations.jeju.alt': '済州',
            'destinations.jeju.tag': '島の休息',
            'destinations.moreCta': '都市をもっと見る',
            'destinations.moreHint': 'ローカルと複数都市プランを完成させましょう。',
            'process.title': '進め方',
            'process.subtitle': '早く、ローカルに、必要なら同行も。',
            'process.step1.title': '1. 日程を共有',
            'process.step1.body': '日程、予算、好みを教えてください。短く簡単に。',
            'process.step2.title': '2. 韓国語で調査',
            'process.step2.body': 'ローカル情報と営業状況を確認して動線を作成します。',
            'process.step3.title': '3. 旅行サポート',
            'process.step3.body': 'プラン提供、追加質問、同行リクエストまで。',
            'companion.title': '韓国でローカルの同行が必要ですか？',
            'companion.body': '1日や2日、ガイド兼通訳として同行できます。',
            'companion.cta': '同行を依頼',
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
            'footer.copy': '© 2026 Korea Local. All Rights Reserved.'
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
