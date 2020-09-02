let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Ideas/ux/studio90srls
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/main.ts
badd +43 term://.//4861:/usr/bin/zsh
badd +5 src/app/app.tsx
badd +1 src/app/miscellaneous/logger/configuration.ts
badd +1 src/app/miscellaneous/index.ts
badd +1 src/app/i18n/index.ts
badd +16 src/app/i18n.ts
badd +4 src/app/miscellaneous/hide-on-scroll/hide-on-scroll.tsx
badd +2 src/app/miscellaneous/logger/factory_logic.ts
badd +3 tsconfig.json
badd +5 src/declarations/react_logger_lib.ts
badd +3 src/declarations/react_logger_lib.d.ts
badd +1 src/declarations/react-logger-lib.d.ts
badd +8 src/tsconfig.app.json
badd +2 src/declarations/react-logger-lib/react-logger-lib.d.ts
badd +88 src/app/header/header.tsx
badd +3 src/app/logo/logo.tsx
badd +5 src/types/png/png.d.ts
badd +30 src/app/footer/footer.tsx
badd +20 src/app/header/header.jss.ts
badd +22 src/app/footer/footer.jss.ts
badd +9 src/app/i18n/it/it.ts
badd +13 src/app/footer/copyright.ts
badd +8 src/app/footer/copyright.tsx
badd +20 src/app/footer/links.tsx
badd +14 src/app/preferences/index.ts
badd +1 src/app/preferences/preferences-model.ts
badd +1 src/app/preferences/preferences-reducers.ts
badd +2 src/app/preferences/preferences-actions.ts
badd +63 node_modules/react-i18next/src/index.d.ts
badd +15 src/app/i18n/en/en.ts
badd +185 ~/.config/nvim/init.vim
badd +1 src/app/app-theme.ts
badd +2 src/app/preferences/theme/theme-action.ts
badd +2 src/app/preferences/theme/theme-reducer.ts
badd +1 src/app/socials/socials.tsx
badd +5 src/app/main/main.tsx
badd +0 /usr/bin/sh:\ 1:\ rg:\ not\ found
badd +4 src/app/miscellaneous/mutate-on-scroll/mutate-on-scroll.tsx
badd +17 src/app/logo/banner/banner.tsx
badd +23 src/app/logo/banner/banner.jss.ts
badd +2 src/types/jpg/jpg.d.ts
badd +6 src/assets/images/section/banner/banner_source.txt
badd +0 ~/Ideas/ux/studio90srls/.git/index
argglobal
%argdel
set stal=2
edit src/app/main/main.tsx
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 6 - ((5 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 015|
tabedit src/app/header/header.tsx
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 88 - ((27 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
88
normal! 052|
tabedit src/app/i18n/it/it.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 36 - ((24 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
36
normal! 0
tabedit src/app/logo/banner/banner.jss.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 23 - ((22 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 034|
tabedit src/assets/images/section/banner/banner_source.txt
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 076|
tabedit src/app/logo/banner/banner.tsx
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 7 - ((6 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 0
tabedit src/app/header/header.jss.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 7 - ((6 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 010|
tabedit src/app/i18n/en/en.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 17 - ((16 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 072|
tabedit src/app/i18n/it/it.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 17 - ((16 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 092|
tabedit src/app/i18n.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
tabedit src/app/footer/footer.tsx
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 19 - ((18 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
19
normal! 039|
tabnext 1
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
