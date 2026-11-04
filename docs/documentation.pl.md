# Dokumentacja projektu

[Działająca strona ↗](https://dawoll.github.io/personal-website/) · [README](../README.pl.md) · [English documentation](documentation.en.md)

## Struktura projektu

| Lokalizacja | Przeznaczenie |
| --- | --- |
| `index.html`, | Główna strona |
| `cs.html`, `music.html`, `mygame.html` | Podstrony w języku angielskim: Counter-Strike, Muzyka oraz Projekt mojej gry |
| `pl/` | Katalog z odpowiednikami polskich stron |
| `css/style.css` | style, motywy i responsywność |
| `javaScript/functions.js` | Główne interakcje strony |
| `javaScript/storage.js` | Zapamiętywanie motywu i języka |
| `javaScript/contact.js` | Formularz kontaktowy Web3Forms |
| `assets/` | Ikony, zdjęcia, tła, czcionki, GIF-y postaci i filmy |
| `docs/` | Dokumentacja i informacje o zasobach w obu językach |

## Główne funkcjonalności

### functions.js

-Zmiana motywu jasnego i ciemnego.
-Zmiana języka.
-Dopasowanie ikony motywu.
-Dopasowanie flagi języka.
-Animacje ikon.
-Kopiowanie adresu e-mail.
-Powiększanie zdjęć.
-Wyświetlanie animacji postaci.
-Wybór i odtwarzanie filmów.
-Automatyczne przechodzenie do następnego filmu.
-Płynny powrót na górę strony.
-Rozwijane menu na telefonie.

### storage.js

- Zapisuje wartość w `localStorage`.
- Otwiera odpowiednik kolejnej podstrony w zapamiętanym języku.
- Otwiera odpowiednik kolejnej podstrony w zapamiętanym motywie.

Każdy język ma własne HTML-e co jest optymalnym rozwiązaniem dla czterech podstron. JS nie tłumaczy tekstu, tylko zapamiętuje wybór.

### contact.js

Zawartość contact.js została automatycznie utworzona przez stronę Web3Forms.

### Funkcje HTML i CSS

- Listy muzyczne.
- Nawigacja i linki zewnętrzne.
- Przekrzywione, nakładające się zdjęcia.
- Wysuwanie napisów przy kontaktach.
- Efekty najechania kursorem.
- Nazwy drużyn w tle.
- Narożniki przy wyświetlanym filmie.
- Dane zawodników, **nie są one automatycznie pobierane z HLTV**.

## Rozwiązania techniczne

### HTML

- **Semantyka i nagłówki:** `header`, `nav`, `main`, `section`, `article` i `footer` opisują role treści. Każda strona ma główny `h1`, sekcje `h2` i w razie potrzeby `h3`.
- **Dostępność:** zastosowano `aria-label`, `aria-controls`, `aria-expanded`, `aria-current="page"`. Pomagają one czytnikom ekranu.
- Przpisanie do elementu **ID i klasa jednocześnie:** ID wskazuje konkretny element dla odwołania ARIA, a klasa nadaje wspólne style.
- **Puste `alt=""`:** dekoracyjne ikony obok równoważnego tekstu są pomijane przez czytnik, żeby nie duplikować informacji.
- `aria-hidden="true"` podobnie ukrywa dekorację przed czytnikami.
- **`defer`:** skrypty wczytują się przy przetwarzaniu HTML i wykonują dopiero po jego przetworzeniu.
- **`?v=n`:** paramentr przy ścieżce pliku, który daje inny adres i odswieża starszy plik z cache.
- **`target="_blank"` i `rel="noopener"`:** otwierają link w nowej karcie i odcinają nowej otwartej stronie dostęp do .js

### CSS

- **Zmienne:** `--text`, `--panel`.
- **Selektory `[]`, pobierane z elementów HTML.
- **Pseudoklasy:** `:hover`, `:last-child`.
- **Pseudoelementy:** `::before` i `::after`.
- **Czcionki:** TrueType `.ttf`.
- **`inherit`:** przejmuje czcionkę lub kolor rodzica.
- Zastosowanie `vw`, `vh` zależnych od rozdzielczości oraz `em`, które zależy od czcionki.
- **`clamp()` wprowadza płynne rozmiary
- **`calc()`** oblicza wartość używając różnych wielkości.
- Uzycie `translateX(0)` przywraca pozycję poziomą.
- `white-space: nowrap` utrzymuje kwotę i walutę razem.

## Responsywność

Widoki referencyjne to **390, 768, 1366 i 1920 px**, z płynnym dopasowaniem pomiędzy nimi.
Oddzielna reguła 529–900 px centruje trzecią kartę gracza pod dwiema pozostałymi - podstrona z Counter-Strike'iem.

## Zasoby i licencje

[Informacje o grafikach, edycji AI i licencjach czcionek](credits.pl.md).

## Autor

**Dawid Głowacki**  
Numer albumu: **103381**  
Specjalizacja: **Techniki Informacyjne**  
Grupa: **TI 5.9**
**Informatyka, Politechnika Lubelska**