const courses = [
  {
    id: 1,
    title: "آموزش زبان انگلیسی خردسالان",
    desc: "4 تا 7 سال",
    book: {
      title: "Pockets",
      books: [
        {
          name: "Little Pockets",
          term: [
            { title: "LP A", units: "1-3" },
            { title: "LP B", units: "4-6" },
            { title: "LP C", units: "7-9" },
          ],
        },
        {
          name: "Pockets 1",
          term: [
            { title: "P1 A", units: "1-3" },
            { title: "P1 B", units: "4-6" },
            { title: "P1 C", units: "7-9" },
          ],
        },
        {
          name: "Pockets 2",
          term: [
            { title: "P2 A", units: "1-3" },
            { title: "P2 B", units: "4-6" },
            { title: "P2 C", units: "7-9" },
          ],
        },
        {
          name: "Pockets 3",
          term: [
            { title: "P3 A", units: "1-3" },
            { title: "P3 B", units: "4-6" },
            { title: "P3 C", units: "7-9" },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: "آموزش زبان انگلیسی کودکان",
    desc: "7 تا 12 سال",
    book: {
      title: "First Friends",
      books: [
        {
          name: "First Friends 1",
          term: [
            { title: "FF1 A", units: "1-5" },
            { title: "FF1 B", units: "6-10" },
          ],
        },
        {
          name: "First Friends 2",
          term: [
            { title: "FF2 A", units: "1-5" },
            { title: "FF2 B", units: "6-10" },
          ],
        },
        {
          name: "First Friends 3",
          term: [
            { title: "FF3 A", units: "1-5" },
            { title: "FF3 B", units: "6-10" },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: "آموزش زبان انگلیسی نوجوانان و جوانان",
    desc: "13 تا 15 سال",
    book: {
      title: "Family and Friends",
      books: [
        {
          name: "Family & Friends Starter",
          term: [
            { title: "F&F starter A", units: "1-5" },
            { title: "F&F starter B", units: "6-9" },
          ],
        },
        {
          name: "Family & Friends 1",
          term: [
            { title: "F&F1 A", units: "1-3" },
            { title: "F&F1 B", units: "4-7" },
            { title: "F&F1 C", units: "8-11" },
            { title: "F&F1 D", units: "12-14" },
          ],
        },
        {
          name: "Family & Friends 2",
          term: [
            { title: "F&F2 A", units: "1-3" },
            { title: "F&F2 B", units: "4-7" },
            { title: "F&F2 C", units: "8-11" },
            { title: "F&F2 D", units: "12-14" },
          ],
        },
        {
          name: "Family & Friends 3",
          term: [
            { title: "F&F3 A", units: "1-3" },
            { title: "F&F3 B", units: "4-7" },
            { title: "F&F3 C", units: "8-11" },
            { title: "F&F3 D", units: "12-14" },
          ],
        },
        {
          name: "Family & Friends 4",
          term: [
            { title: "F&F4 A", units: "1-3" },
            { title: "F&F4 B", units: "4-7" },
            { title: "F&F4 C", units: "8-11" },
            { title: "F&F4 D", units: "12-14" },
          ],
        },
        {
          name: "Family & Friends 5",
          term: [
            { title: "F&F5 A", units: "1-3" },
            { title: "F&F5 B", units: "4-7" },
            { title: "F&F5 C", units: "8-11" },
            { title: "F&F5 D", units: "12-14" },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: "آموزش زبان انگلیسی بزرگسالان",
    desc: "15 تا بزرگسال",
    book: {
      title: "New Headway",
      books: [
        {
          name: "Headway Beginner",
          term: [
            { title: "HWB A", units: "1-4" },
            { title: "HWB B", units: "5-8" },
            { title: "HWB C", units: "9-11" },
            { title: "HWB D", units: "12-14" },
          ],
        },
        {
          name: "Headway Elementary",
          term: [
            { title: "HWE A", units: "1-3" },
            { title: "HWE B", units: "4-6" },
            { title: "HWE C", units: "7-9" },
            { title: "HWE D", units: "10-12" },
          ],
        },
        {
          name: "Headway Pre-Intermediate",
          term: [
            { title: "HWPI A", units: "1-3" },
            { title: "HWPI B", units: "4-6" },
            { title: "HWPI C", units: "7-9" },
            { title: "HWPI D", units: "10-12" },
          ],
        },
        {
          name: "Headway Intermediate",
          term: [
            { title: "HWI A", units: "1-3" },
            { title: "HWI B", units: "4-6" },
            { title: "HWI C", units: "7-9" },
            { title: "HWI D", units: "10-12" },
          ],
        },
        {
          name: "Headway Upper-Intermediate",
          term: [
            { title: "HWUI A", units: "1-3" },
            { title: "HWUI B", units: "4-6" },
            { title: "HWUI C", units: "7-9" },
            { title: "HWUI D", units: "10-12" },
          ],
        },
        {
          name: "Headway Advanced",
          term: [
            { title: "HWA A", units: "1-3" },
            { title: "HWA B", units: "4-6" },
            { title: "HWA C", units: "7-9" },
            { title: "HWA D", units: "10-12" },
          ],
        },
      ],
    },
  },
];

export default courses;
