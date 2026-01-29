document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('#hero button');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
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
        return date.toLocaleString('ko-KR', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    };

    const seedPosts = () => ([
        {
            id: crypto.randomUUID(),
            title: '교통카드 어디서 사나요?',
            author: '여행자',
            tags: ['교통', '서울'],
            content: '처음 방문이라 교통카드를 어디서 사야 하는지 궁금해요.',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            comments: [
                {
                    id: crypto.randomUUID(),
                    author: '현지인',
                    content: '지하철역 편의점에서 바로 살 수 있어요!',
                    createdAt: new Date().toISOString()
                }
            ]
        },
        {
            id: crypto.randomUUID(),
            title: '제주도에서 꼭 가볼만한 곳 추천해주세요',
            author: '미소',
            tags: ['여행', '제주'],
            content: '렌트카로 하루 코스를 계획 중인데, 추천지가 있을까요?',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            updatedAt: new Date(Date.now() - 86400000).toISOString(),
            comments: []
        }
    ]);

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
        formTitle.textContent = isEditing ? '질문 수정' : '새 질문 등록';
        submitButton.textContent = isEditing ? '수정 완료' : '등록';
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
        countEl.textContent = `${posts.length}건`;
        if (!posts.length) {
            listEl.innerHTML = '<li class="board-empty">등록된 질문이 없습니다.</li>';
            return;
        }
        listEl.innerHTML = posts.map((post) => {
            const isActive = post.id === state.selectedId;
            const tags = (post.tags || []).map((tag) => `<span class="board-tag">${escapeHTML(tag)}</span>`).join('');
            return `
                <li class="board-item ${isActive ? 'active' : ''}" data-id="${post.id}" tabindex="0" role="button" aria-pressed="${isActive}">
                    <h4>${escapeHTML(post.title)}</h4>
                    <div class="board-meta">
                        <span>작성자: ${escapeHTML(post.author)}</span>
                        <span>${formatDate(post.createdAt)}</span>
                        <span>댓글 ${post.comments?.length || 0}개</span>
                    </div>
                    <div class="board-tags">${tags}</div>
                </li>
            `;
        }).join('');
    };

    const renderDetail = () => {
        const post = state.posts.find((item) => item.id === state.selectedId);
        if (!post) {
            detailEl.innerHTML = '<p class="board-empty">질문을 선택하면 상세 내용이 표시됩니다.</p>';
            return;
        }

        const tags = (post.tags || []).map((tag) => `<span class="board-tag">${escapeHTML(tag)}</span>`).join('');
        const comments = (post.comments || []).map((comment) => `
            <div class="comment-item">
                <div class="comment-meta">${escapeHTML(comment.author)} · ${formatDate(comment.createdAt)}</div>
                <div>${escapeHTML(comment.content)}</div>
            </div>
        `).join('');

        detailEl.innerHTML = `
            <h4>${escapeHTML(post.title)}</h4>
            <div class="board-meta">
                <span>작성자: ${escapeHTML(post.author)}</span>
                <span>작성일: ${formatDate(post.createdAt)}</span>
                <span>마지막 수정: ${formatDate(post.updatedAt)}</span>
            </div>
            <div class="board-tags">${tags}</div>
            <p>${escapeHTML(post.content).replace(/\n/g, '<br>')}</p>
            <div class="board-detail-actions">
                <button class="edit" data-action="edit">수정</button>
                <button class="delete" data-action="delete">삭제</button>
            </div>
            <div class="board-comments">
                <h5>댓글 (${post.comments?.length || 0})</h5>
                ${comments || '<p class="board-empty">첫 댓글을 남겨보세요.</p>'}
                <form class="comment-form" data-action="comment">
                    <input type="text" name="comment-author" placeholder="이름" required>
                    <textarea name="comment-content" rows="3" placeholder="댓글을 입력하세요" required></textarea>
                    <button type="submit">댓글 등록</button>
                </form>
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
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();
        const tags = tagsInput.value.split(',')
            .map((tag) => tag.trim())
            .filter(Boolean);

        if (!title || !author || !content) {
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
    });

    form.addEventListener('reset', () => {
        editingIdInput.value = '';
        setFormMode(false);
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
            const confirmed = confirm('정말 삭제할까요?');
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
        const post = state.posts.find((item) => item.id === state.selectedId);
        if (!post) {
            return;
        }
        const author = formEl.querySelector('input[name="comment-author"]').value.trim();
        const content = formEl.querySelector('textarea[name="comment-content"]').value.trim();
        if (!author || !content) {
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

    loadData();
    state.selectedId = state.posts[0]?.id || null;
    renderList();
    renderDetail();
});
