---
layout: mdx
title: 'vim seting'
update: '2022-11-12'
categories: 분류:vim, vimrc 
---

```vim
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
	" alternatively, pass a path where Vundle should install plugins
	" call vundle#begin('~/some/path/here')

	" let Vundle manage Vundle, required

	" Vundle 플러그인관리 플러그인
    ":VindleSearch      플러그인 목록 확인
    ":VindleClean       삭제
    ":VindleList        리스트
    "   목록에서 i      Install Plugin
    "            c      clean Up
    "            s      serch
    "            R      reload list
	Plugin 'VundleVim/Vundle.vim'


	":NERETree 파일트리
    "   u: 아래 디랙토리
    "   C: 커서의 디랙토리
    "   r: 새로고침
    "   i: 커서파일 창분할 위아래
    "   s: 커서파일 창분할 좌우
    "   t: 커서파일 새탭
    "   m: 파일 추가 및 삭제
	Plugin 'scrooloose/nerdtree'
        map <Leader>nt <ESC>:NERDTree<CR>
		" 숨김파일 보기
        let NERDTreeShowHidden=1
        ": NERETree 아이콘변경
        Plugin 'ryanoasis/vim-devicons'
        ": 확장자별 아이콘 변경
        Plugin 'tiagofumo/vim-nerdtree-syntax-highlight'
            "이 플러그인으로 설정한 경우 레이블과 동일한 색상(일반적으로 녹색 및 흰색)을 가진 일치하지 않는 폴더 및 파일 아이콘을 비활성화합니다(사용 중인 다른 플러그인에 의해 설정되었을 수 있음).
            "let g:WebDevIconsDisableDefaultFolderSymbolColorFromNERDTreeDir = 1
            "let g:WebDevIconsDisableDefaultFileSymbolColorFromNERDTreeFile = 1
            " 강조표시 비활성화
            "let g:NERDTreeDisableFileExtensionHighlight = 1
            "let g:NERDTreeDisableExactMatchHighlight = 1
            "let g:NERDTreeDisablePatternMatchHighlight = 1
            " 아이콘을 포함하여 전체 표시 강조
            "let g:NERDTreeFileExtensionHighlightFullName = 1
            "let g:NERDTreeExactMatchHighlightFullName = 1
            "let g:NERDTreePatternMatchHighlightFullName = 1
            " 정확히 일치를 사용하여 폴더 강조 표시
            "let g:NERDTreeHighlightFolders = 1 " enables folder icon highlighting using exact match
            "let g:NERDTreeHighlightFoldersFullName = 1 " highlights the folder name
            " 지연문제 완화
            "let g:NERDTreeLimitedSyntax = 1

            ": 주석
            Plugin 'scrooloose/nerdcommenter'
                " Default mappings
                " <leader> cc : visual mode에서 선택부분 주석처리
                " <leader> cn : cc와 같다 강제 중첩
                " <leader> c <space> : 선택한 줄의 주석 상태를 토글합니다.                       " <leader> cm : 다중 부분 구분 기호 집합을 하나만 사용하여 주어진 줄에 주석을 답니다.
                " <leader> ci : 선택한 줄의 주석 상태를 개별적으로 토글
                " <leader> cs : 예쁜 블록 형식의 레이아웃으로 선택한 줄을 주석 처리
                " <leader> cy : cc와 같다 주석이 달린 줄을 먼저 제외
                " <leader> c$ : 커서부터 줄 끝까지 현재 줄을 주석 처리합니다.
                " <leader> cA : 줄 끝에 주석 구분 기호를 추가하고 그 사이에 삽입 모드로 들어갑니다.
                " <leader> ca : 대체 구분 기호 집합으로 전환
                " <leader> cl : cc와 동일하나 구분기호는 왼쪽
                " <leader> cb : cc와 동일하나 구분기 양쪽아래 정렬
                " <leader> cu : 선택한 줄의 주석처리 제거
            " 기본 매핑 만들기
            "let g:NERDCreateDefaultMappings = 1
            " 기본값으로 주석 구분 기호 뒤에 공백 추가
            let g:NERDSpaceDelims = 1
            " 다중 줄 설명의 간단한 구문 사용
            let g:NERDCompactSexyComs = 1
            " 다음 코드 들여쓰기 대신 왼쪽으로 줄 바꿈 주석 구분기호 정렬
            let g:NERDDefaultAlign = 'left'
            " 기본값으로 대체구분 기호를 사용하도록 언어 설정
            let g:NERDAltDelims_java = 1
            " 고유 사용자 지정 형식을 추가 또는 기본값 재정의
            let g:NERDCustomDelimiters = { 'c': { 'left': '/**','right': '*/' } }
            " 주석 달기 및 빈 줄 반전 허용(여러줄 주석에 유용)
            let g:NERDCommentEmptyLines = 1
            " 주석 해제 시 후행 공백 트리밍 사용
            let g:NERDTrimTrailingWhitespace = 1
            " 선택한 모든 라인에 대한 설명이 있는지 여부 확인
            "let g:NERDToggleCheckAllLines = 1


    ":들여쓰기 세로줄  가이드 라인
    Plugin 'nathanaelkane/vim-indent-guides'
        let g:indent_guides_enable_on_vim_startup = 1
        set ts=4 sw=4 et
        let g:indent_guides_start_level = 2
        let g:indent_guides_guide_size = 1


    ":AirlineTheme <!?!>
    Plugin 'vim-airline/vim-airline'
    Plugin 'vim-airline/vim-airline-themes'
        " 탭이 하나만 열려 있을 때 모든 버퍼를 자동 표시
        let g:airline#extensions#tabline#enabled = 1
        let g:airline#extensions#tabline#left_sep = ' '
        let g:airline#extensions#tabline#left_alt_sep = '|'

    ": markdown
        " zf: 선택부분 접기
        " zi: 접는기능 토글
        " zv: 커서 줄 보기
        " zo: 부분펴기
        " zc: 부분접기
        " zM: 모두 접기
        " zR: 모두 펴기
        " zd: 접은 부분 삭제
        " zr: 버퍼 전체에서 폴드 레벨 감소
        " zm: 버퍼 전체에서 폴드 레벨 증가
        " za: 커서위치의 폴더 열기
        " zA: 커서가 있는 폴더 반복 열기
        " zC: 커서가 있는 폴더 반복 닫기
    Plugin 'plasticboy/vim-markdown'
        " 폴딩 활성화
        let g:vim_markdowm_folding_disabled = 1
        " 취소선 앞뒤 물결표 ~~ xx ~~
        let g:vim_markdown_strikethrough = 1
        " 수학기호
        let g:tex_conceal = ""
        let g:vim_markdown_math = 1
        " 코드블록 사용 '''사용언어 '''
        let g:vim_markdown_fenced_languages = ['csharp=cs']
        " 파이썬모드스타일 접기
        let g:vim_markdown_folding_style_pythonic = 1
        " 헤더 접기수준 설정
        let g:vim_markdown_folding_level = 2


	": 코드 자동완성
	Plugin 'valloric/youcompleteme'
        let g:ycm_global_ycm_extra_conf = '~/.vim/.ycm_extra_conf.py'
        let g:ycm_confirm_extra_conf = 0
        let g:ycm_key_list_select_completion = ['', '']
        let g:ycm_key_list_previous_completion = ['', '']
        let g:ycm_autoclose_preview_window_after_completion = 1
        let g:ycm_warning_symbol = '>*'
        ": 자동 완성실행되는 문자 수
        let g:ycm_min_num_of_chars_for_completion = 1
        ": 추천 제안 최대 수 제어
        let g:ycm_max_num_candidates = 30
        let g:ycm_auto_trigger = 1
        let g:ycm_collect_identifiers_from_tags_files = 1
        let g:ycm_filetype_whitelist = { '*': 1 }
        let g:ycm_filetype_blacklist = {
            \ 'tagbar' : 1,
            \ 'qf' : 1,
            \ 'notes' : 1,
            \}


	": 구문체크
	Plugin 'vim-syntastic/syntastic'
        let g:syntastic_html_tidy_ignore_errors=[
        \'proprietary attribute "ng-',
        \'proprietary attribute "chart-',
        \'proprietary attribute "pdk-'
        \]
        let g:syntastic_always_populate_loc_list = 1
        let g:syntastic_check_on_wq = 0
        let g:syntastic_loc_list_height = 5
        let g:syntastic_javascript_checkers = ['eslint']
        let g:syntastic_java_checkers = ['javac', 'checkstyle']
        let g:syntastic_json_checkers = ['jsonlint']
        let g:syntastic_python_checkers = ['flake8']
        let g:syntastic_css_checkers = ['csslint']
        let g:syntastic_c_checkers = ['clang_check']
        " You shouldn't use 'tsc' checker.
        let g:syntastic_html_checkers = ['jshint']
        let g:syntastic_typescript_checkers = ['tsuquyomi']
        let g:syntastic_error_symbol = '? '
        let g:syntastic_warning_symbol = '? '
        let g:syntastic_style_error_symbol = '?'
        let g:syntastic_style_warning_symbol = '?'
        let g:syntastic_java_checkstyle_classpath = '~/checkstyle-7.6-all.jar'
        let g:syntastic_java_checkstyle_conf_file = '~/sun_checks.xml'
        highlight link SyntasticErrorSign SignColumn
        highlight link SyntasticWarningSign SignColumn
        highlight link SyntasticStyleErrorSign SignColumn
        highlight link SyntasticStyleWarningSign SignColumn


	": html, css 코드 단축입력
    "   새파일 : vim index.html
    "   html 상용구 : html:5 또는 <c-y>,
	Plugin 'mattn/emmet-vim'
        let g:user_emmet_leader_key=','
        " 쉼표로 cy트리거 대체, 유형에대해 쉽표2번하면 양쪽완성
        " <div>링크가 포함 된 <p>내부를 추가 <a href="">
            " div>p>a,,
        " .container에 클래스를 추가하고 <div>에 #foo id를 추가하여
        " 이전 예제를 사용 <p> tag
            " div.container>p#foo>a,,
        " 곱할 요소 뒤에 있는 숫자와 함께 사용하면 정의한 만큼 추가
            " 내부에 <div>5 가 포함을 가정 <p>div>p*5
                " div>p*5,,
            " 이전 5개의 <p>id #foo뒤에 서로 구별하기 위해 주문 번호를 지정
                " div>p#foo$*5,,


	": 여러커서에서 동시 수정
	Plugin 'terryma/vim-multiple-cursors'
    " 빠른 리팩토링 : fp<C-n><C-n><C-n>cname
    " 시각적 선택 항목 각줄에 커서 추가 :
    "   vip<C-n>i"<Right><Right><Right>",<Esc>vipgJ$r]Idays = [
    " 시각적 선택에서 문자 일치 :
    "   df[$r,0f,v<C-n>…<C-n>c<CR><Up><Del><Right><Right><Right><Del>


    ": 괄호에 색입힘
    Plugin 'kien/rainbow_parentheses.vim'
    "   :RainbowParenthesesToggle       " Toggle it on/off
    "   :RainbowParenthesesLoadRound    " (), the default when toggling
    "   :RainbowParenthesesLoadSquare   " []
    "   :RainbowParenthesesLoadBraces   " {}
    "   :RainbowParenthesesLoadChevrons " <>
        let g:rbpt_colorpairs = [
            \ ['brown',       'RoyalBlue3'],
            \ ['Darkblue',    'SeaGreen3'],
            \ ['darkgray',    'DarkOrchid3'],
            \ ['darkgreen',   'firebrick3'],
            \ ['darkcyan',    'RoyalBlue3'],
            \ ['darkred',     'SeaGreen3'],
            \ ['darkmagenta', 'DarkOrchid3'],
            \ ['brown',       'firebrick3'],
            \ ['gray',        'RoyalBlue3'],
            \ ['black',       'SeaGreen3'],
            \ ['darkmagenta', 'DarkOrchid3'],
            \ ['Darkblue',    'firebrick3'],
            \ ['darkgreen',   'RoyalBlue3'],
            \ ['darkcyan',    'SeaGreen3'],
            \ ['darkred',     'DarkOrchid3'],
            \ ['red',         'firebrick3'],
            \ ]
        " let g:rbpt_max = 16
        " let g:rbpt_loadcmd_toggle = 0
        au VimEnter * RainbowParenthesesToggle
        au Syntax * RainbowParenthesesLoadRound
        au Syntax * RainbowParenthesesLoadSquare
        au Syntax * RainbowParenthesesLoadBraces


    ": vim 기본설정
    Plugin 'tpope/vim-sensible'
    "
	": rainbow csv
	Plugin 'mechatroner/rainbow_csv'
        autocmd BufNewFile,BufRead *.csv   set filetype=csv_semicolon
        autocmd BufNewFile,BufRead *.dat   set filetype=csv_pipe

    ": ctrl +f 등의 화면이동시 부드러운 움직임
	plugin 'terryma/vim-smooth-scroll'
		" 사용: ^(d, u, f, b, zz, zt, zb, gg, G)

	": 하위 디렉토리 파일 찾기
    ":  ctrl + p 로 사용
	Plugin 'ctrlpvim/ctrlp.vim'

    ": 하나의 파일을 컴파일 후 실행해보
    Plugin 'xuhdev/SingleCompile'

    ": code에 있는 function, parameter, struct들을 보여줌
    "   :Tagbar로 사용 CR
    Plugin 'majutsushi/tagbar'
        "nmap <F8> :TagbarToggle<CR>

    ": css 색 즉시 확인
    Plugin 'ap/vim-css-color'

    ": yank로 복사한부분을 하이라이트
    Plugin 'machakann/vim-highlightedyank'

    ": 이지모션 검색기능?
        " <Leader> <Leader> w 로 사용
        " <Leader> <Leader> fo 로 사용
        " abcd로 이동
    Plugin 'easymotion/vim-easymotion'
    Plugin 'haya14busa/incsearch-easymotion.vim'

	": 자동완성을 누르지 않음
	Plugin 'autoComplPop'

	" 자동완성
	"plugin 'SirVer/ultisnips'
	"plugin 'honza/vim-snippets'
		" 트리거 구성이 아래것들중 하나를 사용한다면 <tab>값을 변경해야함.
		" - https://github.com/Valloric/YouCompleteMe
		" - https://github.com/nvim-lua/completion-nvim
		" let g:UltiSnipsExpandTrigger="<tab>"
		" let g:UltiSnipsJumpForwardTrigger="<c-b>"
		" let g:UltiSnipsJumpBackwardTrigger="<c-z>"
		" 수직 창분할
		"let g:UltiSnipsEditSplit="vertical"

    ": 짝문자 찾기
    Plugin 'matchit.zip'
	" 문장부호 자동완성
	plugin 'raimondi/delimitamte'

	": csv.vim
	Plugin 'chrisbra/csv.vim'

    ": 들여쓰기 하이라디트 등 컴파일 설정
        " JSON
        Plugin 'elzr/vim-json'
        " Type Script
        Plugin 'leafgarland/typescript-vim'
        " JavaScript Template
        Plugin 'Quramy/vim-js-pretty-template'
        " JavaScript
        Plugin 'pangloss/vim-javascript'
        " Jsx
        Plugin 'mxw/vim-jsx'
        let g:jsx_ext_required =0
        "
        Plugin 'isRuslan/vim-es6'

    ": vim indent
    ":  들여쓰기가 같은라인을 vii로 모두선택
    Plugin 'michaeljsmith/vim-indent-object'

	": search 단어 개수 등 보여줌
	Plugin 'osyo-manga/vim-anzu'
    " statusline
    set statusline=%{anzu#search_status()}

	": in, sqrt, sum등의 기호를 수학기호 표기
	Plugin 'ehamberg/vim-cute-python'

	": 커서가 놓인 단어에 밑줄
	Plugin 'itchyny/vim-cursorword'

    ": 라인끝 공백제거 \s
    Plugin 'ntpeters/vim-better-whitespace'
        " 기본적으로 저장시 공백 강조 표시 및 제거 활성화
        let g:better_whitespace_enabled=1
        let g:strip_whitespace_on_save=1
        " 사용자 지정 하이라이트 색상 설정:
        "highlight ExtraWhitespace ctermbg=<desired_color>
        " 또는:
        "let g:better_whitespace_ctermcolor='<desired_color>'
        " gui 색상 설정 :
        "let g:better_whitespace_guicolor='<desired_color>'
        "공백강조 활성화 비활성화
        " :EnableWhitespace
        " :DisableWhitespace
        " :ToggleWhitespace
        " :StripWhitespace
        " 공백만 포함된 줄은 무시
        "let g:better_whitespace_skip_empty_lines=1
        " 탭 앞이나 사이에 나타나는 공백 문자 강조 :
        "let g:show_spaces_that_precede_tabs=1


	Plugin 'tpope/vim-fugitive'
	Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
	" The following are examples of different formats supported.
	" Keep Plugin commands between vundle#begin/end.
	" plugin on GitHub repo
	" plugin from http://vim-scripts.org/vim/scripts.html
	" Plugin 'L9'
	" Git plugin not hosted on GitHub
	"Plugin 'git://git.wincent.com/command-t.git'
	" git repos on your local machine (i.e. when working on your own plugin)
	"Plugin 'file:///home/gmarik/path/to/plugin'
	" The sparkup vim script is in a subdirectory of this repo called vim.
	" Pass the path to set the runtimepath properly.
	" Install L9 and avoid a Naming conflict if you've already installed a
	" different version somewhere else.
	" Plugin 'ascenator/L9', {'name': 'newL9'}

	" All of your Plugins must be added before the following line
	call vundle#end()            " required
	filetype plugin indent on    " required
	" To ignore plugin indent changes, instead use:
	"filetype plugin on
	"
	" Brief help
	" :PluginList       - lists configured plugins
	" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
	" :PluginSearch foo - searches for foo; append `!` to refresh local cache
	" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
	"
	" see :h vundle for more details or wiki for FAQ
	" Put your non-Plugin stuff after this line

if has("syntax")				"구문강조 사용
	syntax on
	endif

set fileencodings=utf-8,euc-kr	"인코딩 타입
set termencoding=utf-8			"터미널 인코딩
set history=128				"vi편집 기록 기억 1000개, .viminfo에 기록
set tabstop=4
set shiftwidth=4				"자동들여쓰기 너비 설정
set colorcolumn=80
set linespace=3					"줄간격
set t_Co=256					"color 설정

	"항상 상태바 표시
set laststatus=2
set statusline=\ %<%l:%v\ [%P]%=%a\ %h%m%r\ %F\
    " 마지막 수정위치에 커서
au BufReadPost *
\ if line("'\"") > 0 && line("'\"") <= line("$") |
\ exe "norm g`\"" |
\ endif

set number				"행번호
set autowrite  			"자동들여쓰기
set autoindent
set smartindent
set smarttab
set cindent				"C언어 자동 들여쓰기
set visualbell			"키를 잘못눌렀을 때 화면 프레시
set showcmd				"일치하는
set showmatch			"일치하는 괄호 하이라이팅
set cursorline
set hlsearch
set ruler				"현재 커서 위치표시
set backspace=2			"삽입모드에서 백스페이스를 계속 허용
set nowrapscan			"찾기에서 파일의 맨 끝에 이르면 계속하여 찾지 않음
set nojoinspaces		"J명령어로 줄 붙일때 마침표뒤에 한칸만 띔
set title				"
set wildmenu				"자동완성 기능향상
set paste               " 붙여넣기 계단현상 보정

set background=dark
colorscheme molokai 				"컬러스킴 사용
let g:molokai_original = 1
let g:rehash256 = 1

"<c-x>, <c-o>, <c-n>
filetype plugin on			"file type 자동 인식
set omnifunc=syntaxcomplete#Complete

""여러줄 주석 허용
""dkfsdf
"sdfsdfsd
```