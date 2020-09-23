## Project Setup

```
yarn install
yarn start
```

## Tasks

oncelikler

- [ ] Redux

  - [x] Provided
  - [x] redux-thunk
  - [x] work fine on home page, search, pagination
  - [ ] work fine on detail page
  - [ ] selectors denenecek.

- [ ] api parameters

- [x] Home Page

  - [x] SearchInput

    - [x] first draft
    - [x] functional
    - [x] Redux a bagla.

  - [x] Table

    - [x] first draft
    - [x] inputs Arrays => list of rows
    - [x] functional
    - [x] detail button link to detail
    - [x] thumbnail image ekle.
    - [x] numaralari pagination a gore degistir. her zaman 1 den baslamasin.

  - [ ] Make pagination
    - [ ] hazir pagination [ packageleri ](https://www.npmjs.com/package/react-responsive-pagination) varmis. (source kodlarina bakilabilir.)
    - [x] [Traversy Media Video ](https://www.youtube.com/watch?v=IYCa1F-OWmk) guzelmis.
    - [x] Redux a bagla.
    - [x] sayfa 1 deyken 1 tiklayinca yeniden render oluyor
    - [x] sayfa 5 deyken 1 ,,, 9 a kadar gorunsun.
    - [x] Son sayfadaki gorunumu, ilk sayfaya gore simetrik.
      - [x] yapay son sayfa yaparak denendi.
    - [ ] sayfa 250 dan sonra hata aliyorum. api discovery in kisitlamasi olabilir.
    - [x] 3,4,5,6 gecislerine bak
    - [x] next, previous, first and last button
    - [ ] tekrar bakilacak. Problemli taraflari
      - [ ] pagilong 1 fazla.
      - [ ] total page azsa pagination array yine de uzun oluyor. tekrar gozden gecirilecek.
    - [ ] Testleri yazarken refactoru dusunurek yaz.

- [ ] Detail Page

  - [x] Basic, islevsel page yapilsin
  - [ ] input kisalt.
  - [x] priceRange olmayin sadece buy buttonu ciksin.
  - [ ] defaultProps kullan
  - [ ] eventinfo yu bootstrap card ile yapilabilir.
  - [ ] data.sales da da dates var, incele.

- [ ] Redux data async
  - [x] farkli bir reducer yap.
- [ ] Style

- [x] router, homepage, detailpage and 404.
  - [x] make seperate component
  - [x] react-router ve reactstrap calismiyor.

### Make simple design

just input text button display

Input onChange sadece state i degistirsin, search button istek atsin

Table in icerisine loding animastionu koy.

### Api Usage

regex ile kullanmak daha kolay ve mantikli geliyor.

uye olmadan [ buradaki ](https://developer.ticketmaster.com/api-explorer/v2/) api-key kullanilabilir.
`apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0`

ornek kullanim. [request](https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0)

### Further Reading

#### Redux

##### Canical state , app state and ui state.

**canonical state**: api dan gelen data.
Redux da bu sekilde tutmak mantiksiz ve beni en fazla zorlayan kisim burasi oldu.
Bu konuyla ilgili arastirmam gerekenler.
Yani canonical state te nerede, nasil islemler yapip app state e donusturmeliyim.
Keywords: Hashing, redux Selector patern,

- [ ] selector function cozum olabilir. [querying redux](https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f)

- [ ] [hacker noon selecter pattern](https://hackernoon.com/selector-pattern-painless-redux-store-destructuring-bfc26b72b9ae#5f2d)

- [ ] izlenecek [dan abramov egg head ](https://egghead.io/lessons/javascript-redux-the-middleware-chain) te redux dersi cok guzel duruyor.

- [ ] Bu sorunun cozumunun [selectors ](https://gist.github.com/abhiaiyer91/aaf6e325cf7fc5fd5ebc70192a1fa170) oldugunu soyleyen kucuk bir post.

##### Redux pagination

extra bir package ile yapmislar. [ github ](https://github.com/PCreations/redux-paginator)

[ 5 tips for redux large app blog post.](https://medium.com/xandr-tech/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb#cb70)

Redux statelerine componentler tarafindan ulasilmasi, hepsinin containerdekiler tarafindan asagiya verilmesinden daha mantikli geldi. Degistirdim. Arastirilacak.

guzel redux [ post ](https://thinkster.io/tutorials/react-redux-pagination)

##### Redux thunk Async

try out thunk getstate example [redux doc ](https://redux.js.org/tutorials/essentials/part-5-async-logic#thunk-functions)

taming redux kitabindaki thunk bolumunu oku.

[redux error handling and async action guzel video](https://www.youtube.com/watch?v=tcCS4mGAq7Q&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=29)

anlamsiz keyword verdigimde catch blogu calisiyor ama error mesaji yok.
Ayrica then blogu da calisiyor.
??? action daki koda tekrar bakilacak.

#### Data vs object destruction

Redux taki tum response datasini nasil tutacagina karar veremedim.
`{event, page , link} = Actions.payload ` veya `data = action.payload`
(canonical state konusuyla ayni)

[ nested state in redux doc ] ( https://redux.js.org/faq/organizing-state#how-do-i-organize-nested-or-duplicate-data-in-my-state)

#### Testing

hackernon test driven dev todo app [part 1 ](https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-1-b8a200bb7091) , 2, 3 , 4

TDD cok guzel video form netherlands usa [ link](https://www.youtube.com/watch?v=tvlE2p_rt9E)

#### how to import

`Comps.` ile tum componentleri cok kolayca ulasabiliyorum.
Neden diger projelerde boyle bisey kullanilmadigini arastir.
[ Tree Shaking ](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
den dolayi `Comps.` sekilde kullanilmiyormus.

- [ ] import export u iyi anlayarak daha otomatik hale getirilebilir.

### Cikarimlar

Yeni projelere container pages ve redux i yaparak basla.
