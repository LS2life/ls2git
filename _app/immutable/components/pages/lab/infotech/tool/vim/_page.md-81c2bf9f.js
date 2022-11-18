import{S as m,i as g,s as d,X as c,w as y,x as h,y as _,Y as w,Z as k,f as b,t as f,z as v,_ as i,k as P,l as R,m as D,h as r,n as x,b as S,B as E}from"../../../../../../chunks/index-a37d17cb.js";import{M as C}from"../../../../../../chunks/MarkdownLayout-04a27b46.js";function T(o){let s,t=`<code class="language-vim"><span class="token keyword">set</span> <span class="token builtin">nocompatible</span>              <span class="token comment">" be iMproved, required</span>
<span class="token keyword">filetype</span> off                  <span class="token comment">" required</span>

<span class="token comment">" set the runtime path to include Vundle and initialize</span>
<span class="token keyword">set</span> <span class="token builtin">rtp</span><span class="token operator">+=</span>~<span class="token operator">/</span><span class="token operator">.</span><span class="token keyword">vim</span><span class="token operator">/</span>bundle<span class="token operator">/</span>Vundle<span class="token operator">.</span><span class="token keyword">vim</span>
<span class="token keyword">call</span> vundle#<span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">" alternatively, pass a path where Vundle should install plugins</span>
	<span class="token comment">" call vundle#begin(</span><span class="token string">'~/some/path/here'</span><span class="token punctuation">)</span>

	<span class="token comment">" let Vundle manage Vundle, required</span>

	<span class="token comment">" Vundle \uD50C\uB7EC\uADF8\uC778\uAD00\uB9AC \uD50C\uB7EC\uADF8\uC778</span>
    <span class="token comment">":VindleSearch      \uD50C\uB7EC\uADF8\uC778 \uBAA9\uB85D \uD655\uC778</span>
    <span class="token comment">":VindleClean       \uC0AD\uC81C</span>
    <span class="token comment">":VindleList        \uB9AC\uC2A4\uD2B8</span>
    <span class="token comment">"   \uBAA9\uB85D\uC5D0\uC11C i      Install Plugin</span>
    <span class="token comment">"            c      clean Up</span>
    <span class="token comment">"            s      serch</span>
    <span class="token comment">"            R      reload list</span>
	Plugin <span class="token string">'VundleVim/Vundle.vim'</span>


	<span class="token comment">":NERETree \uD30C\uC77C\uD2B8\uB9AC</span>
    <span class="token comment">"   u: \uC544\uB798 \uB514\uB799\uD1A0\uB9AC</span>
    <span class="token comment">"   C: \uCEE4\uC11C\uC758 \uB514\uB799\uD1A0\uB9AC</span>
    <span class="token comment">"   r: \uC0C8\uB85C\uACE0\uCE68</span>
    <span class="token comment">"   i: \uCEE4\uC11C\uD30C\uC77C \uCC3D\uBD84\uD560 \uC704\uC544\uB798</span>
    <span class="token comment">"   s: \uCEE4\uC11C\uD30C\uC77C \uCC3D\uBD84\uD560 \uC88C\uC6B0</span>
    <span class="token comment">"   t: \uCEE4\uC11C\uD30C\uC77C \uC0C8\uD0ED</span>
    <span class="token comment">"   m: \uD30C\uC77C \uCD94\uAC00 \uBC0F \uC0AD\uC81C</span>
	Plugin <span class="token string">'scrooloose/nerdtree'</span>
        map <span class="token operator">&lt;</span>Leader<span class="token operator">></span>nt <span class="token operator">&lt;</span>ESC<span class="token operator">></span><span class="token punctuation">:</span>NERDTree<span class="token operator">&lt;</span>CR<span class="token operator">></span>
		<span class="token comment">" \uC228\uAE40\uD30C\uC77C \uBCF4\uAE30</span>
        <span class="token keyword">let</span> NERDTreeShowHidden<span class="token operator">=</span><span class="token number">1</span>
        <span class="token comment">": NERETree \uC544\uC774\uCF58\uBCC0\uACBD</span>
        Plugin <span class="token string">'ryanoasis/vim-devicons'</span>
        <span class="token comment">": \uD655\uC7A5\uC790\uBCC4 \uC544\uC774\uCF58 \uBCC0\uACBD</span>
        Plugin <span class="token string">'tiagofumo/vim-nerdtree-syntax-highlight'</span>
            <span class="token comment">"\uC774 \uD50C\uB7EC\uADF8\uC778\uC73C\uB85C \uC124\uC815\uD55C \uACBD\uC6B0 \uB808\uC774\uBE14\uACFC \uB3D9\uC77C\uD55C \uC0C9\uC0C1(\uC77C\uBC18\uC801\uC73C\uB85C \uB179\uC0C9 \uBC0F \uD770\uC0C9)\uC744 \uAC00\uC9C4 \uC77C\uCE58\uD558\uC9C0 \uC54A\uB294 \uD3F4\uB354 \uBC0F \uD30C\uC77C \uC544\uC774\uCF58\uC744 \uBE44\uD65C\uC131\uD654\uD569\uB2C8\uB2E4(\uC0AC\uC6A9 \uC911\uC778 \uB2E4\uB978 \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC758\uD574 \uC124\uC815\uB418\uC5C8\uC744 \uC218 \uC788\uC74C).</span>
            <span class="token comment">"let g:WebDevIconsDisableDefaultFolderSymbolColorFromNERDTreeDir = 1</span>
            <span class="token comment">"let g:WebDevIconsDisableDefaultFileSymbolColorFromNERDTreeFile = 1</span>
            <span class="token comment">" \uAC15\uC870\uD45C\uC2DC \uBE44\uD65C\uC131\uD654</span>
            <span class="token comment">"let g:NERDTreeDisableFileExtensionHighlight = 1</span>
            <span class="token comment">"let g:NERDTreeDisableExactMatchHighlight = 1</span>
            <span class="token comment">"let g:NERDTreeDisablePatternMatchHighlight = 1</span>
            <span class="token comment">" \uC544\uC774\uCF58\uC744 \uD3EC\uD568\uD558\uC5EC \uC804\uCCB4 \uD45C\uC2DC \uAC15\uC870</span>
            <span class="token comment">"let g:NERDTreeFileExtensionHighlightFullName = 1</span>
            <span class="token comment">"let g:NERDTreeExactMatchHighlightFullName = 1</span>
            <span class="token comment">"let g:NERDTreePatternMatchHighlightFullName = 1</span>
            <span class="token comment">" \uC815\uD655\uD788 \uC77C\uCE58\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD3F4\uB354 \uAC15\uC870 \uD45C\uC2DC</span>
            <span class="token string">"let g:NERDTreeHighlightFolders = 1 "</span> enables folder <span class="token builtin">icon</span> highlighting using exact <span class="token keyword">match</span>
            <span class="token string">"let g:NERDTreeHighlightFoldersFullName = 1 "</span> highlights the folder name
            <span class="token comment">" \uC9C0\uC5F0\uBB38\uC81C \uC644\uD654</span>
            <span class="token comment">"let g:NERDTreeLimitedSyntax = 1</span>

            <span class="token comment">": \uC8FC\uC11D</span>
            Plugin <span class="token string">'scrooloose/nerdcommenter'</span>
                <span class="token comment">" Default mappings</span>
                <span class="token comment">" &lt;leader> cc : visual mode\uC5D0\uC11C \uC120\uD0DD\uBD80\uBD84 \uC8FC\uC11D\uCC98\uB9AC</span>
                <span class="token comment">" &lt;leader> cn : cc\uC640 \uAC19\uB2E4 \uAC15\uC81C \uC911\uCCA9</span>
                <span class="token string">" &lt;leader> c &lt;space> : \uC120\uD0DD\uD55C \uC904\uC758 \uC8FC\uC11D \uC0C1\uD0DC\uB97C \uD1A0\uAE00\uD569\uB2C8\uB2E4.                       "</span> <span class="token operator">&lt;</span>leader<span class="token operator">></span> cm <span class="token punctuation">:</span> \uB2E4\uC911 \uBD80\uBD84 \uAD6C\uBD84 \uAE30\uD638 \uC9D1\uD569\uC744 \uD558\uB098\uB9CC \uC0AC\uC6A9\uD558\uC5EC \uC8FC\uC5B4\uC9C4 \uC904\uC5D0 \uC8FC\uC11D\uC744 \uB2F5\uB2C8\uB2E4<span class="token operator">.</span>
                <span class="token comment">" &lt;leader> ci : \uC120\uD0DD\uD55C \uC904\uC758 \uC8FC\uC11D \uC0C1\uD0DC\uB97C \uAC1C\uBCC4\uC801\uC73C\uB85C \uD1A0\uAE00</span>
                <span class="token comment">" &lt;leader> cs : \uC608\uC05C \uBE14\uB85D \uD615\uC2DD\uC758 \uB808\uC774\uC544\uC6C3\uC73C\uB85C \uC120\uD0DD\uD55C \uC904\uC744 \uC8FC\uC11D \uCC98\uB9AC</span>
                <span class="token comment">" &lt;leader> cy : cc\uC640 \uAC19\uB2E4 \uC8FC\uC11D\uC774 \uB2EC\uB9B0 \uC904\uC744 \uBA3C\uC800 \uC81C\uC678</span>
                <span class="token comment">" &lt;leader> c$ : \uCEE4\uC11C\uBD80\uD130 \uC904 \uB05D\uAE4C\uC9C0 \uD604\uC7AC \uC904\uC744 \uC8FC\uC11D \uCC98\uB9AC\uD569\uB2C8\uB2E4.</span>
                <span class="token comment">" &lt;leader> cA : \uC904 \uB05D\uC5D0 \uC8FC\uC11D \uAD6C\uBD84 \uAE30\uD638\uB97C \uCD94\uAC00\uD558\uACE0 \uADF8 \uC0AC\uC774\uC5D0 \uC0BD\uC785 \uBAA8\uB4DC\uB85C \uB4E4\uC5B4\uAC11\uB2C8\uB2E4.</span>
                <span class="token comment">" &lt;leader> ca : \uB300\uCCB4 \uAD6C\uBD84 \uAE30\uD638 \uC9D1\uD569\uC73C\uB85C \uC804\uD658</span>
                <span class="token comment">" &lt;leader> cl : cc\uC640 \uB3D9\uC77C\uD558\uB098 \uAD6C\uBD84\uAE30\uD638\uB294 \uC67C\uCABD</span>
                <span class="token comment">" &lt;leader> cb : cc\uC640 \uB3D9\uC77C\uD558\uB098 \uAD6C\uBD84\uAE30 \uC591\uCABD\uC544\uB798 \uC815\uB82C</span>
                <span class="token comment">" &lt;leader> cu : \uC120\uD0DD\uD55C \uC904\uC758 \uC8FC\uC11D\uCC98\uB9AC \uC81C\uAC70</span>
            <span class="token comment">" \uAE30\uBCF8 \uB9E4\uD551 \uB9CC\uB4E4\uAE30</span>
            <span class="token comment">"let g:NERDCreateDefaultMappings = 1</span>
            <span class="token comment">" \uAE30\uBCF8\uAC12\uC73C\uB85C \uC8FC\uC11D \uAD6C\uBD84 \uAE30\uD638 \uB4A4\uC5D0 \uACF5\uBC31 \uCD94\uAC00</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDSpaceDelims <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token comment">" \uB2E4\uC911 \uC904 \uC124\uBA85\uC758 \uAC04\uB2E8\uD55C \uAD6C\uBB38 \uC0AC\uC6A9</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDCompactSexyComs <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token comment">" \uB2E4\uC74C \uCF54\uB4DC \uB4E4\uC5EC\uC4F0\uAE30 \uB300\uC2E0 \uC67C\uCABD\uC73C\uB85C \uC904 \uBC14\uAFC8 \uC8FC\uC11D \uAD6C\uBD84\uAE30\uD638 \uC815\uB82C</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDDefaultAlign <span class="token operator">=</span> <span class="token string">'left'</span>
            <span class="token comment">" \uAE30\uBCF8\uAC12\uC73C\uB85C \uB300\uCCB4\uAD6C\uBD84 \uAE30\uD638\uB97C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uC5B8\uC5B4 \uC124\uC815</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDAltDelims_java <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token comment">" \uACE0\uC720 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD615\uC2DD\uC744 \uCD94\uAC00 \uB610\uB294 \uAE30\uBCF8\uAC12 \uC7AC\uC815\uC758</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDCustomDelimiters <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token string">'c'</span><span class="token punctuation">:</span> <span class="token punctuation">&#123;</span> <span class="token string">'left'</span><span class="token punctuation">:</span> <span class="token string">'/**'</span><span class="token punctuation">,</span><span class="token string">'right'</span><span class="token punctuation">:</span> <span class="token string">'*/'</span> <span class="token punctuation">&#125;</span> <span class="token punctuation">&#125;</span>
            <span class="token comment">" \uC8FC\uC11D \uB2EC\uAE30 \uBC0F \uBE48 \uC904 \uBC18\uC804 \uD5C8\uC6A9(\uC5EC\uB7EC\uC904 \uC8FC\uC11D\uC5D0 \uC720\uC6A9)</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDCommentEmptyLines <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token comment">" \uC8FC\uC11D \uD574\uC81C \uC2DC \uD6C4\uD589 \uACF5\uBC31 \uD2B8\uB9AC\uBC0D \uC0AC\uC6A9</span>
            <span class="token keyword">let</span> g<span class="token punctuation">:</span>NERDTrimTrailingWhitespace <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token comment">" \uC120\uD0DD\uD55C \uBAA8\uB4E0 \uB77C\uC778\uC5D0 \uB300\uD55C \uC124\uBA85\uC774 \uC788\uB294\uC9C0 \uC5EC\uBD80 \uD655\uC778</span>
            <span class="token comment">"let g:NERDToggleCheckAllLines = 1</span>


    <span class="token comment">":\uB4E4\uC5EC\uC4F0\uAE30 \uC138\uB85C\uC904  \uAC00\uC774\uB4DC \uB77C\uC778</span>
    Plugin <span class="token string">'nathanaelkane/vim-indent-guides'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>indent_guides_enable_on_vim_startup <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">set</span> <span class="token keyword">ts</span><span class="token operator">=</span><span class="token number">4</span> <span class="token builtin">sw</span><span class="token operator">=</span><span class="token number">4</span> <span class="token builtin">et</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>indent_guides_start_level <span class="token operator">=</span> <span class="token number">2</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>indent_guides_guide_size <span class="token operator">=</span> <span class="token number">1</span>


    <span class="token comment">":AirlineTheme &lt;!?!></span>
    Plugin <span class="token string">'vim-airline/vim-airline'</span>
    Plugin <span class="token string">'vim-airline/vim-airline-themes'</span>
        <span class="token comment">" \uD0ED\uC774 \uD558\uB098\uB9CC \uC5F4\uB824 \uC788\uC744 \uB54C \uBAA8\uB4E0 \uBC84\uD37C\uB97C \uC790\uB3D9 \uD45C\uC2DC</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>airline#extensions#<span class="token builtin">tabline</span>#enabled <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>airline#extensions#<span class="token builtin">tabline</span>#left_sep <span class="token operator">=</span> <span class="token string">' '</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>airline#extensions#<span class="token builtin">tabline</span>#left_alt_sep <span class="token operator">=</span> <span class="token string">'|'</span>

    <span class="token comment">": markdown</span>
        <span class="token comment">" zf: \uC120\uD0DD\uBD80\uBD84 \uC811\uAE30</span>
        <span class="token comment">" zi: \uC811\uB294\uAE30\uB2A5 \uD1A0\uAE00</span>
        <span class="token comment">" zv: \uCEE4\uC11C \uC904 \uBCF4\uAE30</span>
        <span class="token comment">" zo: \uBD80\uBD84\uD3B4\uAE30</span>
        <span class="token comment">" zc: \uBD80\uBD84\uC811\uAE30</span>
        <span class="token comment">" zM: \uBAA8\uB450 \uC811\uAE30</span>
        <span class="token comment">" zR: \uBAA8\uB450 \uD3B4\uAE30</span>
        <span class="token comment">" zd: \uC811\uC740 \uBD80\uBD84 \uC0AD\uC81C</span>
        <span class="token comment">" zr: \uBC84\uD37C \uC804\uCCB4\uC5D0\uC11C \uD3F4\uB4DC \uB808\uBCA8 \uAC10\uC18C</span>
        <span class="token comment">" zm: \uBC84\uD37C \uC804\uCCB4\uC5D0\uC11C \uD3F4\uB4DC \uB808\uBCA8 \uC99D\uAC00</span>
        <span class="token comment">" za: \uCEE4\uC11C\uC704\uCE58\uC758 \uD3F4\uB354 \uC5F4\uAE30</span>
        <span class="token comment">" zA: \uCEE4\uC11C\uAC00 \uC788\uB294 \uD3F4\uB354 \uBC18\uBCF5 \uC5F4\uAE30</span>
        <span class="token comment">" zC: \uCEE4\uC11C\uAC00 \uC788\uB294 \uD3F4\uB354 \uBC18\uBCF5 \uB2EB\uAE30</span>
    Plugin <span class="token string">'plasticboy/vim-markdown'</span>
        <span class="token comment">" \uD3F4\uB529 \uD65C\uC131\uD654</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdowm_folding_disabled <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">" \uCDE8\uC18C\uC120 \uC55E\uB4A4 \uBB3C\uACB0\uD45C ~~ xx ~~</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdown_strikethrough <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">" \uC218\uD559\uAE30\uD638</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>tex_conceal <span class="token operator">=</span> <span class="token string">""</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdown_math <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">" \uCF54\uB4DC\uBE14\uB85D \uC0AC\uC6A9 </span><span class="token string">'''\uC0AC\uC6A9\uC5B8\uC5B4 '''</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdown_fenced_languages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'csharp=cs'</span><span class="token punctuation">]</span>
        <span class="token comment">" \uD30C\uC774\uC36C\uBAA8\uB4DC\uC2A4\uD0C0\uC77C \uC811\uAE30</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdown_folding_style_pythonic <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">" \uD5E4\uB354 \uC811\uAE30\uC218\uC900 \uC124\uC815</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>vim_markdown_folding_level <span class="token operator">=</span> <span class="token number">2</span>


	<span class="token comment">": \uCF54\uB4DC \uC790\uB3D9\uC644\uC131</span>
	Plugin <span class="token string">'valloric/youcompleteme'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_global_ycm_extra_conf <span class="token operator">=</span> <span class="token string">'~/.vim/.ycm_extra_conf.py'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_confirm_extra_conf <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_key_list_select_completion <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_key_list_previous_completion <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_autoclose_preview_window_after_completion <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_warning_symbol <span class="token operator">=</span> <span class="token string">'>*'</span>
        <span class="token comment">": \uC790\uB3D9 \uC644\uC131\uC2E4\uD589\uB418\uB294 \uBB38\uC790 \uC218</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_min_num_of_chars_for_completion <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token comment">": \uCD94\uCC9C \uC81C\uC548 \uCD5C\uB300 \uC218 \uC81C\uC5B4</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_max_num_candidates <span class="token operator">=</span> <span class="token number">30</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_auto_trigger <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_collect_identifiers_from_tags_files <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_filetype_whitelist <span class="token operator">=</span> <span class="token punctuation">&#123;</span> <span class="token string">'*'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>ycm_filetype_blacklist <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
             <span class="token string">'tagbar'</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
             <span class="token string">'qf'</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
             <span class="token string">'notes'</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span>


	<span class="token comment">": \uAD6C\uBB38\uCCB4\uD06C</span>
	Plugin <span class="token string">'vim-syntastic/syntastic'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_html_tidy_ignore_errors<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">'proprietary attribute "ng-'</span><span class="token punctuation">,</span>
        <span class="token string">'proprietary attribute "chart-'</span><span class="token punctuation">,</span>
        <span class="token string">'proprietary attribute "pdk-'</span>
        <span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_always_populate_loc_list <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_check_on_wq <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_loc_list_height <span class="token operator">=</span> <span class="token number">5</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_javascript_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'eslint'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_java_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'javac'</span><span class="token punctuation">,</span> <span class="token string">'checkstyle'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_json_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'jsonlint'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_python_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'flake8'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_css_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'csslint'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_c_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'clang_check'</span><span class="token punctuation">]</span>
        <span class="token comment">" You shouldn</span><span class="token string">'t use '</span>tsc' checker<span class="token operator">.</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_html_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'jshint'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_typescript_checkers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'tsuquyomi'</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_error_symbol <span class="token operator">=</span> <span class="token string">'? '</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_warning_symbol <span class="token operator">=</span> <span class="token string">'? '</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_style_error_symbol <span class="token operator">=</span> <span class="token string">'?'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_style_warning_symbol <span class="token operator">=</span> <span class="token string">'?'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_java_checkstyle_classpath <span class="token operator">=</span> <span class="token string">'~/checkstyle-7.6-all.jar'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>syntastic_java_checkstyle_conf_file <span class="token operator">=</span> <span class="token string">'~/sun_checks.xml'</span>
        <span class="token builtin">highlight</span> link SyntasticErrorSign SignColumn
        <span class="token builtin">highlight</span> link SyntasticWarningSign SignColumn
        <span class="token builtin">highlight</span> link SyntasticStyleErrorSign SignColumn
        <span class="token builtin">highlight</span> link SyntasticStyleWarningSign SignColumn


	<span class="token comment">": html, css \uCF54\uB4DC \uB2E8\uCD95\uC785\uB825</span>
    <span class="token comment">"   \uC0C8\uD30C\uC77C : vim index.html</span>
    <span class="token comment">"   html \uC0C1\uC6A9\uAD6C : html:5 \uB610\uB294 &lt;c-y>,</span>
	Plugin <span class="token string">'mattn/emmet-vim'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>user_emmet_leader_key<span class="token operator">=</span><span class="token string">','</span>
        <span class="token comment">" \uC27C\uD45C\uB85C cy\uD2B8\uB9AC\uAC70 \uB300\uCCB4, \uC720\uD615\uC5D0\uB300\uD574 \uC27D\uD45C2\uBC88\uD558\uBA74 \uC591\uCABD\uC644\uC131</span>
        <span class="token string">" &lt;div>\uB9C1\uD06C\uAC00 \uD3EC\uD568 \uB41C &lt;p>\uB0B4\uBD80\uB97C \uCD94\uAC00 &lt;a href="</span><span class="token comment">"></span>
            <span class="token comment">" div>p>a,,</span>
        <span class="token comment">" .container\uC5D0 \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD558\uACE0 &lt;div>\uC5D0 #foo id\uB97C \uCD94\uAC00\uD558\uC5EC</span>
        <span class="token comment">" \uC774\uC804 \uC608\uC81C\uB97C \uC0AC\uC6A9 &lt;p> tag</span>
            <span class="token comment">" div.container>p#foo>a,,</span>
        <span class="token comment">" \uACF1\uD560 \uC694\uC18C \uB4A4\uC5D0 \uC788\uB294 \uC22B\uC790\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uBA74 \uC815\uC758\uD55C \uB9CC\uD07C \uCD94\uAC00</span>
            <span class="token comment">" \uB0B4\uBD80\uC5D0 &lt;div>5 \uAC00 \uD3EC\uD568\uC744 \uAC00\uC815 &lt;p>div>p*5</span>
                <span class="token comment">" div>p*5,,</span>
            <span class="token comment">" \uC774\uC804 5\uAC1C\uC758 &lt;p>id #foo\uB4A4\uC5D0 \uC11C\uB85C \uAD6C\uBCC4\uD558\uAE30 \uC704\uD574 \uC8FC\uBB38 \uBC88\uD638\uB97C \uC9C0\uC815</span>
                <span class="token comment">" div>p#foo$*5,,</span>


	<span class="token comment">": \uC5EC\uB7EC\uCEE4\uC11C\uC5D0\uC11C \uB3D9\uC2DC \uC218\uC815</span>
	Plugin <span class="token string">'terryma/vim-multiple-cursors'</span>
    <span class="token comment">" \uBE60\uB978 \uB9AC\uD329\uD1A0\uB9C1 : fp&lt;C-n>&lt;C-n>&lt;C-n>cname</span>
    <span class="token comment">" \uC2DC\uAC01\uC801 \uC120\uD0DD \uD56D\uBAA9 \uAC01\uC904\uC5D0 \uCEE4\uC11C \uCD94\uAC00 :</span>
    <span class="token string">"   vip&lt;C-n>i"</span><span class="token operator">&lt;</span>Right<span class="token operator">></span><span class="token operator">&lt;</span>Right<span class="token operator">></span><span class="token operator">&lt;</span>Right<span class="token operator">></span><span class="token comment">",&lt;Esc>vipgJ$r]Idays = [</span>
    <span class="token comment">" \uC2DC\uAC01\uC801 \uC120\uD0DD\uC5D0\uC11C \uBB38\uC790 \uC77C\uCE58 :</span>
    <span class="token comment">"   df[$r,0f,v&lt;C-n>\u2026&lt;C-n>c&lt;CR>&lt;Up>&lt;Del>&lt;Right>&lt;Right>&lt;Right>&lt;Del></span>


    <span class="token comment">": \uAD04\uD638\uC5D0 \uC0C9\uC785\uD798</span>
    Plugin <span class="token string">'kien/rainbow_parentheses.vim'</span>
    <span class="token string">"   :RainbowParenthesesToggle       "</span> Toggle it <span class="token keyword">on</span><span class="token operator">/</span>off
    <span class="token string">"   :RainbowParenthesesLoadRound    "</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> the default when toggling
    <span class="token string">"   :RainbowParenthesesLoadSquare   "</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token string">"   :RainbowParenthesesLoadBraces   "</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
    <span class="token string">"   :RainbowParenthesesLoadChevrons "</span> <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>rbpt_colorpairs <span class="token operator">=</span> <span class="token punctuation">[</span>
             <span class="token punctuation">[</span><span class="token string">'brown'</span><span class="token punctuation">,</span>       <span class="token string">'RoyalBlue3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'Darkblue'</span><span class="token punctuation">,</span>    <span class="token string">'SeaGreen3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkgray'</span><span class="token punctuation">,</span>    <span class="token string">'DarkOrchid3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkgreen'</span><span class="token punctuation">,</span>   <span class="token string">'firebrick3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkcyan'</span><span class="token punctuation">,</span>    <span class="token string">'RoyalBlue3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkred'</span><span class="token punctuation">,</span>     <span class="token string">'SeaGreen3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkmagenta'</span><span class="token punctuation">,</span> <span class="token string">'DarkOrchid3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'brown'</span><span class="token punctuation">,</span>       <span class="token string">'firebrick3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'gray'</span><span class="token punctuation">,</span>        <span class="token string">'RoyalBlue3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'black'</span><span class="token punctuation">,</span>       <span class="token string">'SeaGreen3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkmagenta'</span><span class="token punctuation">,</span> <span class="token string">'DarkOrchid3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'Darkblue'</span><span class="token punctuation">,</span>    <span class="token string">'firebrick3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkgreen'</span><span class="token punctuation">,</span>   <span class="token string">'RoyalBlue3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkcyan'</span><span class="token punctuation">,</span>    <span class="token string">'SeaGreen3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'darkred'</span><span class="token punctuation">,</span>     <span class="token string">'DarkOrchid3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">[</span><span class="token string">'red'</span><span class="token punctuation">,</span>         <span class="token string">'firebrick3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
             <span class="token punctuation">]</span>
        <span class="token comment">" let g:rbpt_max = 16</span>
        <span class="token comment">" let g:rbpt_loadcmd_toggle = 0</span>
        au VimEnter <span class="token operator">*</span> RainbowParenthesesToggle
        au Syntax <span class="token operator">*</span> RainbowParenthesesLoadRound
        au Syntax <span class="token operator">*</span> RainbowParenthesesLoadSquare
        au Syntax <span class="token operator">*</span> RainbowParenthesesLoadBraces


    <span class="token comment">": vim \uAE30\uBCF8\uC124\uC815</span>
    Plugin <span class="token string">'tpope/vim-sensible'</span>
    <span class="token comment">"</span>
	<span class="token comment">": rainbow csv</span>
	Plugin <span class="token string">'mechatroner/rainbow_csv'</span>
        <span class="token builtin">autocmd</span> BufNewFile<span class="token punctuation">,</span>BufRead <span class="token operator">*</span><span class="token operator">.</span>csv   <span class="token keyword">set</span> <span class="token keyword">filetype</span><span class="token operator">=</span>csv_semicolon
        <span class="token builtin">autocmd</span> BufNewFile<span class="token punctuation">,</span>BufRead <span class="token operator">*</span><span class="token operator">.</span>dat   <span class="token keyword">set</span> <span class="token keyword">filetype</span><span class="token operator">=</span>csv_pipe

    <span class="token comment">": ctrl +f \uB4F1\uC758 \uD654\uBA74\uC774\uB3D9\uC2DC \uBD80\uB4DC\uB7EC\uC6B4 \uC6C0\uC9C1\uC784</span>
	plugin <span class="token string">'terryma/vim-smooth-scroll'</span>
		<span class="token comment">" \uC0AC\uC6A9: ^(d, u, f, b, zz, zt, zb, gg, G)</span>

	<span class="token comment">": \uD558\uC704 \uB514\uB809\uD1A0\uB9AC \uD30C\uC77C \uCC3E\uAE30</span>
    <span class="token comment">":  ctrl + p \uB85C \uC0AC\uC6A9</span>
	Plugin <span class="token string">'ctrlpvim/ctrlp.vim'</span>

    <span class="token comment">": \uD558\uB098\uC758 \uD30C\uC77C\uC744 \uCEF4\uD30C\uC77C \uD6C4 \uC2E4\uD589\uD574\uBCF4</span>
    Plugin <span class="token string">'xuhdev/SingleCompile'</span>

    <span class="token comment">": code\uC5D0 \uC788\uB294 function, parameter, struct\uB4E4\uC744 \uBCF4\uC5EC\uC90C</span>
    <span class="token comment">"   :Tagbar\uB85C \uC0AC\uC6A9 CR</span>
    Plugin <span class="token string">'majutsushi/tagbar'</span>
        <span class="token comment">"nmap &lt;F8> :TagbarToggle&lt;CR></span>

    <span class="token comment">": css \uC0C9 \uC989\uC2DC \uD655\uC778</span>
    Plugin <span class="token string">'ap/vim-css-color'</span>

    <span class="token comment">": yank\uB85C \uBCF5\uC0AC\uD55C\uBD80\uBD84\uC744 \uD558\uC774\uB77C\uC774\uD2B8</span>
    Plugin <span class="token string">'machakann/vim-highlightedyank'</span>

    <span class="token comment">": \uC774\uC9C0\uBAA8\uC158 \uAC80\uC0C9\uAE30\uB2A5?</span>
        <span class="token comment">" &lt;Leader> &lt;Leader> w \uB85C \uC0AC\uC6A9</span>
        <span class="token comment">" &lt;Leader> &lt;Leader> fo \uB85C \uC0AC\uC6A9</span>
        <span class="token comment">" abcd\uB85C \uC774\uB3D9</span>
    Plugin <span class="token string">'easymotion/vim-easymotion'</span>
    Plugin <span class="token string">'haya14busa/incsearch-easymotion.vim'</span>

	<span class="token comment">": \uC790\uB3D9\uC644\uC131\uC744 \uB204\uB974\uC9C0 \uC54A\uC74C</span>
	Plugin <span class="token string">'autoComplPop'</span>

	<span class="token comment">" \uC790\uB3D9\uC644\uC131</span>
	<span class="token comment">"plugin </span><span class="token string">'SirVer/ultisnips'</span>
	<span class="token comment">"plugin </span><span class="token string">'honza/vim-snippets'</span>
		<span class="token comment">" \uD2B8\uB9AC\uAC70 \uAD6C\uC131\uC774 \uC544\uB798\uAC83\uB4E4\uC911 \uD558\uB098\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74 &lt;tab>\uAC12\uC744 \uBCC0\uACBD\uD574\uC57C\uD568.</span>
		<span class="token comment">" - https://github.com/Valloric/YouCompleteMe</span>
		<span class="token comment">" - https://github.com/nvim-lua/completion-nvim</span>
		<span class="token string">" let g:UltiSnipsExpandTrigger="</span><span class="token operator">&lt;</span><span class="token keyword">tab</span><span class="token operator">></span><span class="token comment">"</span>
		<span class="token string">" let g:UltiSnipsJumpForwardTrigger="</span><span class="token operator">&lt;</span><span class="token keyword">c</span><span class="token operator">-</span><span class="token keyword">b</span><span class="token operator">></span><span class="token comment">"</span>
		<span class="token string">" let g:UltiSnipsJumpBackwardTrigger="</span><span class="token operator">&lt;</span><span class="token keyword">c</span><span class="token operator">-</span>z<span class="token operator">></span><span class="token comment">"</span>
		<span class="token comment">" \uC218\uC9C1 \uCC3D\uBD84\uD560</span>
		<span class="token string">"let g:UltiSnipsEditSplit="</span><span class="token keyword">vertical</span><span class="token comment">"</span>

    <span class="token comment">": \uC9DD\uBB38\uC790 \uCC3E\uAE30</span>
    Plugin <span class="token string">'matchit.zip'</span>
	<span class="token comment">" \uBB38\uC7A5\uBD80\uD638 \uC790\uB3D9\uC644\uC131</span>
	plugin <span class="token string">'raimondi/delimitamte'</span>

	<span class="token comment">": csv.vim</span>
	Plugin <span class="token string">'chrisbra/csv.vim'</span>

    <span class="token comment">": \uB4E4\uC5EC\uC4F0\uAE30 \uD558\uC774\uB77C\uB514\uD2B8 \uB4F1 \uCEF4\uD30C\uC77C \uC124\uC815</span>
        <span class="token comment">" JSON</span>
        Plugin <span class="token string">'elzr/vim-json'</span>
        <span class="token comment">" Type Script</span>
        Plugin <span class="token string">'leafgarland/typescript-vim'</span>
        <span class="token comment">" JavaScript Template</span>
        Plugin <span class="token string">'Quramy/vim-js-pretty-template'</span>
        <span class="token comment">" JavaScript</span>
        Plugin <span class="token string">'pangloss/vim-javascript'</span>
        <span class="token comment">" Jsx</span>
        Plugin <span class="token string">'mxw/vim-jsx'</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>jsx_ext_required <span class="token operator">=</span><span class="token number">0</span>
        <span class="token comment">"</span>
        Plugin <span class="token string">'isRuslan/vim-es6'</span>

    <span class="token comment">": vim indent</span>
    <span class="token comment">":  \uB4E4\uC5EC\uC4F0\uAE30\uAC00 \uAC19\uC740\uB77C\uC778\uC744 vii\uB85C \uBAA8\uB450\uC120\uD0DD</span>
    Plugin <span class="token string">'michaeljsmith/vim-indent-object'</span>

	<span class="token comment">": search \uB2E8\uC5B4 \uAC1C\uC218 \uB4F1 \uBCF4\uC5EC\uC90C</span>
	Plugin <span class="token string">'osyo-manga/vim-anzu'</span>
    <span class="token comment">" statusline</span>
    <span class="token keyword">set</span> <span class="token builtin">statusline</span><span class="token operator">=</span><span class="token operator">%</span><span class="token punctuation">&#123;</span>anzu#<span class="token function">search_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span>

	<span class="token comment">": in, sqrt, sum\uB4F1\uC758 \uAE30\uD638\uB97C \uC218\uD559\uAE30\uD638 \uD45C\uAE30</span>
	Plugin <span class="token string">'ehamberg/vim-cute-python'</span>

	<span class="token comment">": \uCEE4\uC11C\uAC00 \uB193\uC778 \uB2E8\uC5B4\uC5D0 \uBC11\uC904</span>
	Plugin <span class="token string">'itchyny/vim-cursorword'</span>

    <span class="token comment">": \uB77C\uC778\uB05D \uACF5\uBC31\uC81C\uAC70 s</span>
    Plugin <span class="token string">'ntpeters/vim-better-whitespace'</span>
        <span class="token comment">" \uAE30\uBCF8\uC801\uC73C\uB85C \uC800\uC7A5\uC2DC \uACF5\uBC31 \uAC15\uC870 \uD45C\uC2DC \uBC0F \uC81C\uAC70 \uD65C\uC131\uD654</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>better_whitespace_enabled<span class="token operator">=</span><span class="token number">1</span>
        <span class="token keyword">let</span> g<span class="token punctuation">:</span>strip_whitespace_on_save<span class="token operator">=</span><span class="token number">1</span>
        <span class="token comment">" \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uD558\uC774\uB77C\uC774\uD2B8 \uC0C9\uC0C1 \uC124\uC815:</span>
        <span class="token comment">"highlight ExtraWhitespace ctermbg=&lt;desired_color></span>
        <span class="token comment">" \uB610\uB294:</span>
        <span class="token comment">"let g:better_whitespace_ctermcolor=</span><span class="token string">'&lt;desired_color>'</span>
        <span class="token comment">" gui \uC0C9\uC0C1 \uC124\uC815 :</span>
        <span class="token comment">"let g:better_whitespace_guicolor=</span><span class="token string">'&lt;desired_color>'</span>
        <span class="token comment">"\uACF5\uBC31\uAC15\uC870 \uD65C\uC131\uD654 \uBE44\uD65C\uC131\uD654</span>
        <span class="token comment">" :EnableWhitespace</span>
        <span class="token comment">" :DisableWhitespace</span>
        <span class="token comment">" :ToggleWhitespace</span>
        <span class="token comment">" :StripWhitespace</span>
        <span class="token comment">" \uACF5\uBC31\uB9CC \uD3EC\uD568\uB41C \uC904\uC740 \uBB34\uC2DC</span>
        <span class="token comment">"let g:better_whitespace_skip_empty_lines=1</span>
        <span class="token comment">" \uD0ED \uC55E\uC774\uB098 \uC0AC\uC774\uC5D0 \uB098\uD0C0\uB098\uB294 \uACF5\uBC31 \uBB38\uC790 \uAC15\uC870 :</span>
        <span class="token comment">"let g:show_spaces_that_precede_tabs=1</span>


	Plugin <span class="token string">'tpope/vim-fugitive'</span>
	Plugin <span class="token string">'rstacruz/sparkup'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token string">'rtp'</span><span class="token punctuation">:</span> <span class="token string">'vim/'</span><span class="token punctuation">&#125;</span>
	<span class="token comment">" The following are examples of different formats supported.</span>
	<span class="token comment">" Keep Plugin commands between vundle#begin/end.</span>
	<span class="token comment">" plugin on GitHub repo</span>
	<span class="token comment">" plugin from http://vim-scripts.org/vim/scripts.html</span>
	<span class="token comment">" Plugin </span><span class="token string">'L9'</span>
	<span class="token comment">" Git plugin not hosted on GitHub</span>
	<span class="token comment">"Plugin </span><span class="token string">'git://git.wincent.com/command-t.git'</span>
	<span class="token comment">" git repos on your local machine (i.e. when working on your own plugin)</span>
	<span class="token comment">"Plugin </span><span class="token string">'file:///home/gmarik/path/to/plugin'</span>
	<span class="token comment">" The sparkup vim script is in a subdirectory of this repo called vim.</span>
	<span class="token comment">" Pass the path to set the runtimepath properly.</span>
	<span class="token comment">" Install L9 and avoid a Naming conflict if you've already installed a</span>
	<span class="token comment">" different version somewhere else.</span>
	<span class="token comment">" Plugin </span><span class="token string">'ascenator/L9'</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">'newL9'</span><span class="token punctuation">&#125;</span>

	<span class="token comment">" All of your Plugins must be added before the following line</span>
	<span class="token keyword">call</span> vundle#<span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            <span class="token comment">" required</span>
	<span class="token keyword">filetype</span> plugin indent <span class="token keyword">on</span>    <span class="token comment">" required</span>
	<span class="token comment">" To ignore plugin indent changes, instead use:</span>
	<span class="token comment">"filetype plugin on</span>
	<span class="token comment">"</span>
	<span class="token comment">" Brief help</span>
	<span class="token comment">" :PluginList       - lists configured plugins</span>
	<span class="token comment">" :PluginInstall    - installs plugins; append &#96;!&#96; to update or just :PluginUpdate</span>
	<span class="token comment">" :PluginSearch foo - searches for foo; append &#96;!&#96; to refresh local cache</span>
	<span class="token comment">" :PluginClean      - confirms removal of unused plugins; append &#96;!&#96; to auto-approve removal</span>
	<span class="token comment">"</span>
	<span class="token comment">" see :h vundle for more details or wiki for FAQ</span>
	<span class="token comment">" Put your non-Plugin stuff after this line</span>

<span class="token keyword">if</span> <span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"syntax"</span><span class="token punctuation">)</span>				<span class="token comment">"\uAD6C\uBB38\uAC15\uC870 \uC0AC\uC6A9</span>
	<span class="token builtin">syntax</span> <span class="token keyword">on</span>
	<span class="token keyword">endif</span>

<span class="token keyword">set</span> <span class="token builtin">fileencodings</span><span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span>euc<span class="token operator">-</span>kr	<span class="token comment">"\uC778\uCF54\uB529 \uD0C0\uC785</span>
<span class="token keyword">set</span> <span class="token builtin">termencoding</span><span class="token operator">=</span>utf<span class="token operator">-</span><span class="token number">8</span>			<span class="token comment">"\uD130\uBBF8\uB110 \uC778\uCF54\uB529</span>
<span class="token keyword">set</span> <span class="token keyword">history</span><span class="token operator">=</span><span class="token number">128</span>				<span class="token comment">"vi\uD3B8\uC9D1 \uAE30\uB85D \uAE30\uC5B5 1000\uAC1C, .viminfo\uC5D0 \uAE30\uB85D</span>
<span class="token keyword">set</span> <span class="token builtin">tabstop</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token keyword">set</span> <span class="token builtin">shiftwidth</span><span class="token operator">=</span><span class="token number">4</span>				<span class="token comment">"\uC790\uB3D9\uB4E4\uC5EC\uC4F0\uAE30 \uB108\uBE44 \uC124\uC815</span>
<span class="token keyword">set</span> colorcolumn<span class="token operator">=</span><span class="token number">80</span>
<span class="token keyword">set</span> <span class="token builtin">linespace</span><span class="token operator">=</span><span class="token number">3</span>					<span class="token comment">"\uC904\uAC04\uACA9</span>
<span class="token keyword">set</span> <span class="token builtin">t_Co</span><span class="token operator">=</span><span class="token number">256</span>					<span class="token comment">"color \uC124\uC815</span>

	<span class="token comment">"\uD56D\uC0C1 \uC0C1\uD0DC\uBC14 \uD45C\uC2DC</span>
<span class="token keyword">set</span> <span class="token builtin">laststatus</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token keyword">set</span> <span class="token builtin">statusline</span><span class="token operator">=</span> <span class="token operator">%</span><span class="token operator">&lt;</span><span class="token operator">%</span><span class="token keyword">l</span><span class="token punctuation">:</span><span class="token operator">%</span>v <span class="token punctuation">[</span><span class="token operator">%</span><span class="token keyword">P</span><span class="token punctuation">]</span><span class="token operator">%</span><span class="token operator">=</span><span class="token operator">%</span>a <span class="token operator">%</span><span class="token keyword">h</span><span class="token operator">%</span><span class="token keyword">m</span><span class="token operator">%</span><span class="token keyword">r</span> <span class="token operator">%</span>F    <span class="token comment">" \uB9C8\uC9C0\uB9C9 \uC218\uC815\uC704\uCE58\uC5D0 \uCEE4\uC11C</span>
au BufReadPost <span class="token operator">*</span>
 <span class="token keyword">if</span> <span class="token function">line</span><span class="token punctuation">(</span><span class="token string">"'""</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">line</span><span class="token punctuation">(</span><span class="token string">"'""</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token function">line</span><span class="token punctuation">(</span><span class="token string">"$"</span><span class="token punctuation">)</span> |
 exe <span class="token string">"norm g&#96;""</span> |
 <span class="token keyword">endif</span>

<span class="token keyword">set</span> <span class="token keyword">number</span>				<span class="token comment">"\uD589\uBC88\uD638</span>
<span class="token keyword">set</span> <span class="token builtin">autowrite</span>  			<span class="token comment">"\uC790\uB3D9\uB4E4\uC5EC\uC4F0\uAE30</span>
<span class="token keyword">set</span> <span class="token builtin">autoindent</span>
<span class="token keyword">set</span> <span class="token builtin">smartindent</span>
<span class="token keyword">set</span> <span class="token builtin">smarttab</span>
<span class="token keyword">set</span> <span class="token builtin">cindent</span>				<span class="token comment">"C\uC5B8\uC5B4 \uC790\uB3D9 \uB4E4\uC5EC\uC4F0\uAE30</span>
<span class="token keyword">set</span> <span class="token builtin">visualbell</span>			<span class="token comment">"\uD0A4\uB97C \uC798\uBABB\uB20C\uB800\uC744 \uB54C \uD654\uBA74 \uD504\uB808\uC2DC</span>
<span class="token keyword">set</span> <span class="token builtin">showcmd</span>				<span class="token comment">"\uC77C\uCE58\uD558\uB294</span>
<span class="token keyword">set</span> <span class="token builtin">showmatch</span>			<span class="token comment">"\uC77C\uCE58\uD558\uB294 \uAD04\uD638 \uD558\uC774\uB77C\uC774\uD305</span>
<span class="token keyword">set</span> <span class="token builtin">cursorline</span>
<span class="token keyword">set</span> <span class="token builtin">hlsearch</span>
<span class="token keyword">set</span> <span class="token builtin">ruler</span>				<span class="token comment">"\uD604\uC7AC \uCEE4\uC11C \uC704\uCE58\uD45C\uC2DC</span>
<span class="token keyword">set</span> <span class="token builtin">backspace</span><span class="token operator">=</span><span class="token number">2</span>			<span class="token comment">"\uC0BD\uC785\uBAA8\uB4DC\uC5D0\uC11C \uBC31\uC2A4\uD398\uC774\uC2A4\uB97C \uACC4\uC18D \uD5C8\uC6A9</span>
<span class="token keyword">set</span> <span class="token builtin">nowrapscan</span>			<span class="token comment">"\uCC3E\uAE30\uC5D0\uC11C \uD30C\uC77C\uC758 \uB9E8 \uB05D\uC5D0 \uC774\uB974\uBA74 \uACC4\uC18D\uD558\uC5EC \uCC3E\uC9C0 \uC54A\uC74C</span>
<span class="token keyword">set</span> <span class="token builtin">nojoinspaces</span>		<span class="token comment">"J\uBA85\uB839\uC5B4\uB85C \uC904 \uBD99\uC77C\uB54C \uB9C8\uCE68\uD45C\uB4A4\uC5D0 \uD55C\uCE78\uB9CC \uB754</span>
<span class="token keyword">set</span> <span class="token builtin">title</span>				<span class="token comment">"</span>
<span class="token keyword">set</span> <span class="token builtin">wildmenu</span>				<span class="token comment">"\uC790\uB3D9\uC644\uC131 \uAE30\uB2A5\uD5A5\uC0C1</span>
<span class="token keyword">set</span> <span class="token builtin">paste</span>               <span class="token comment">" \uBD99\uC5EC\uB123\uAE30 \uACC4\uB2E8\uD604\uC0C1 \uBCF4\uC815</span>

<span class="token keyword">set</span> <span class="token builtin">background</span><span class="token operator">=</span>dark
<span class="token keyword">colorscheme</span> molokai 				<span class="token comment">"\uCEEC\uB7EC\uC2A4\uD0B4 \uC0AC\uC6A9</span>
<span class="token keyword">let</span> g<span class="token punctuation">:</span>molokai_original <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> g<span class="token punctuation">:</span>rehash256 <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">"&lt;c-x>, &lt;c-o>, &lt;c-n></span>
<span class="token keyword">filetype</span> plugin <span class="token keyword">on</span>			<span class="token comment">"file type \uC790\uB3D9 \uC778\uC2DD</span>
<span class="token keyword">set</span> <span class="token builtin">omnifunc</span><span class="token operator">=</span>syntaxcomplete#Complete

<span class="token string">""</span>\uC5EC\uB7EC\uC904 \uC8FC\uC11D \uD5C8\uC6A9
<span class="token string">""</span>dkfsdf
<span class="token comment">"sdfsdfsd</span></code>`;return{c(){s=P("pre"),this.h()},l(a){s=R(a,"PRE",{class:!0});var p=D(s);p.forEach(r),this.h()},h(){x(s,"class","language-vim")},m(a,p){S(a,s,p),s.innerHTML=t},p:E,d(a){a&&r(s)}}}function N(o){let s,t;const a=[o[0],u];let p={$$slots:{default:[T]},$$scope:{ctx:o}};for(let n=0;n<a.length;n+=1)p=c(p,a[n]);return s=new C({props:p}),{c(){y(s.$$.fragment)},l(n){h(s.$$.fragment,n)},m(n,e){_(s,n,e),t=!0},p(n,[e]){const l=e&1?w(a,[e&1&&k(n[0]),e&0&&k(u)]):{};e&2&&(l.$$scope={dirty:e,ctx:n}),s.$set(l)},i(n){t||(b(s.$$.fragment,n),t=!0)},o(n){f(s.$$.fragment,n),t=!1},d(n){v(s,n)}}}const u={layout:"mdx",title:"vim seting",update:"2022-11-12",categories:"\uBD84\uB958:vim, vimrc"};function z(o,s,t){return o.$$set=a=>{t(0,s=c(c({},s),i(a)))},s=i(s),[s]}class F extends m{constructor(s){super(),g(this,s,z,N,d,{})}}export{F as default,u as metadata};
