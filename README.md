## Project Setup

```
yarn install
yarn start
```

## Tasks

- oncelikler
- [ ] Redux
- [ ] api parameters

- [ ] Simple design

  - [ ] Home Page

    - [ ] SearchInput

      - [x] first draft
      - [x] functional
      - [ ] Redux a bagla.

    - [ ] Table

      - [x] first draft
      - [x] inputs Arrays => list of rows
      - [ ] functional

    - [ ] Make pagination
      - [ ] hazir pagination [ packageleri ](https://www.npmjs.com/package/react-responsive-pagination) varmis. (source kodlarina bakilabilir.)
      - [x] [Traversy Media Video ](https://www.youtube.com/watch?v=IYCa1F-OWmk) guzelmis.
      - [ ] Redux a bagla.

- [ ] Detail Page

- [x] router, homepage, detailpage and 404.
  - [x] make seperate component
  - [x] react-router ve reactstrap calismiyor.

### Make simple design

just input text button display

Input onChange sadece state i degistirsin, search button istek atsin

Table in icerisine loding animastionu koy.

### Api Usage

uye olmadan [ buradaki ](https://developer.ticketmaster.com/api-explorer/v2/) api-key kullanilabilir.
`apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0`

ornek kullanim. [request](https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0)

### Further Reading

#### Redux

try out thunk getstate example [redux doc ](https://redux.js.org/tutorials/essentials/part-5-async-logic#thunk-functions)

taming redux kitabindaki thunk bolumunu oku.

[redux error handling and async action guzel video](https://www.youtube.com/watch?v=tcCS4mGAq7Q&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=29)

#### Testing

hackernon test driven dev todo app [part 1 ](https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-1-b8a200bb7091) , 2, 3 , 4

TDD cok guzel video form netherlands usa [ link] (
https://www.youtube.com/watch?v=tvlE2p_rt9E
)

#### how to import

`Comps.` ile tum componentleri cok kolayca ulasabiliyorum.
Neden diger projelerde boyle bisey kullanilmadigini arastir.
