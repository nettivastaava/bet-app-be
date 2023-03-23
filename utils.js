const results = [
  {
    game: "QAT-ECU",
    h: 0, 
    a: 2
  },
  {
    game: "ENG-IRN",
    h: 6, 
    a: 2
  },
  {
    game: "SEN-NED",
    h: 0, 
    a: 2
  },
  {
    game: "USA-WAL",
    h: 1,
    a: 1
  },
  {
    game: "ARG-KSA",
    h: 1,
    a: 2
  },
  {
    game: "DEN-TUN",
    h: 0,
    a: 0
  },
  {
    game: "MEX-POL",
    h: 0,
    a: 0
  },
  {
    game: "FRA-AUS",
    h: 4,
    a: 1
  },
  {
    game: "MAR-CRO",
    h: 0,
    a: 0
  },
  {
    game: "GER-JPN",
    h: 1,
    a: 2
  },
  {
    game: "SPA-CRI",
    h: 7,
    a: 0
  },
  {
    game: "BEL-CAN",
    h: 1,
    a: 0
  },
  {
    game: "SWI-CMR",
    h: 1,
    a: 0
  },
  {
    game: "URU-KOR",
    h: 0,
    a: 0
  },
  {
    game: "POR-GHA",
    h: 3,
    a: 2
  },
  {
    game: "BRA-SER",
    h: 2,
    a: 0
  },
  {
    game: "WAL-IRN",
    h: 0,
    a: 2
  },
  {
    game: "QAT-SEN",
    h: 1,
    a: 3
  },
  {
    game: "NED-ECU",
    h: 1,
    a: 1
  },
  {
    game: "ENG-USA",
    h: 0,
    a: 0
  },
  {
    game: "TUN-AUS",
    h: 0,
    a: 1
  },
  {
    game: "POL-KSA",
    h: 2,
    a: 0
  },
  {
    game: "FRA-DEN",
    h: 2,
    a: 1
  },
  {
    game: "ARG-MEX",
    h: 2,
    a: 0
  },
  {
    game: "JPN-CRI",
    h: 0,
    a: 1
  },
  {
    game: "BEL-MAR",
    h: 0,
    a: 2
  },
  {
    game: "CRO-CAN",
    h: 4,
    a: 1
  }, 
  {
    game: "SPA-GER",
    h: 1,
    a: 1
  },
  {
    game: "CMR-SER",
    h: 3,
    a: 3
  },
  {
    game: "KOR-GHA",
    h: 2,
    a: 3
  },
  {
    game: "BRA-SWI",
    h: 1,
    a: 0
  },
  {
    game: "POR-URU",
    h: 2,
    a: 0
  },
  {
    game: "ECU-SEN",
    h: 1,
    a: 2
  },
  {
    game: "NED-QAT",
    h: 2,
    a: 0
  },
  {
    game: "WAL-ENG",
    h: 0,
    a: 3
  },
  {
    game: "IRN-USA",
    h: 0,
    a: 1
  },
  {
    game: "TUN-FRA",
    h: 1,
    a: 0
  },
  {
    game: "AUS-DEN",
    h: 1,
    a: 0
  },
  {
    game: "POL-ARG",
    h: 0,
    a: 2
  },
  {
    game: "KSA-MEX",
    h: 1,
    a: 2
  },
  {
    game: "CRO-BEL",
    h: 0,
    a: 0
  },
  {
    game: "CAN-MAR",
    h: 1,
    a: 2
  },
  {
    game: "JPN-SPA",
    h: 2,
    a: 1
  },
  {
    game: "CRI-GER",
    h: 2,
    a: 4
  },
  {
    game: "KOR-POR",
    h: 2,
    a: 1
  },
  {
    game: "GHA-URU",
    h: 0,
    a: 2
  },
  {
    game: "CMR-BRA",
    h: 1,
    a: 0
  },
  {
    game: "SER-SWI",
    h: 2,
    a: 3
  },
]

const players = [
  {
    name: "Lord Wader",
    threes: 0,
    twos: 0,
    ones: 0,
    first_three: undefined,
    first_two: undefined,
    first_one: undefined,
    guesses: [
      {
        game: "QAT-EQU",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "ENG-IRN",
        h: 2,
        a: 0,
        points_awarded: 0
      },
      {
        game: "SEN-NED",
        h: 0,
        a: 2,
        points_awarded: 0
      },
      {
        game: "USA-WAL",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "ARG-KSA",
        h: 3,
        a: 0,
        points_awarded: 0
      },
      {
        game: "DEN-TUN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "MEX-POL",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "FRA-AUS",
        h: 3,
        a: 0,
        points_awarded: 0
      },
      {
        game: "MAR-CRO",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "GER-JPN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "SPA-CRI",
        h: 1,
        a: 0,
        points_awarded: 0
      },
      {
        game: "BEL-CAN",
        h: 2,
        a: 0,
        points_awarded: 0
      },
      {
        game: "SWI-CAM",
        h: 2,
        a: 0,
        points_awarded: 0
      },
      {
        game: "URU-KOR",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "POR-GHA",
        h: 2,
        a: 0,
        points_awarded: 0
      },
      {
        game: "BRA-SER",
        h: 2,
        a: 0,
        points_awarded: 0
      },
      {
        game: "WAL-IRN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "QAT-SEN",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "NED-ECU",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "ENG-USA",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "TUN-AUS",
        h: 1,
        a: 0,
        points_awarded: 0
      },
      {
        game: "POL-KSA",
        h: 1,
        a: 0,
        points_awarded: 0
      },
      {
        game: "FRA-DEN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "ARG-MEX",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "JPN-CRI",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "BEL-MAR",
        h: 2, 
        a: 0,
        points_awarded: 0
      },
      {
        game: "CRO-CAN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "ESP-GER",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "CAM-SER",
        h: 0,
        a: 1,
        points_awarded: 0
      },
      {
        game: "KOR-GHA",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "BRA-SWI",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "POR-URU",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "ECU-SEN",
        h: 2,
        a: 1,
        points_awarded: 0
      },
      {
        game: "NED-QAT",
        h: 1,
        a: 0,
        points_awarded: 0
      },
      {
        game: "WAL-ENG",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "IRN-USA",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "TUN-FRA",
        h: 0, 
        a: 2,
        points_awarded: 0
      },
      {
        game: "AUS-DEN",
        h: 0,
        a: 2,
        points_awarded: 0
      },
      {
        game: "POL-ARG",
        h: 0,
        a: 2,
        points_awarded: 0
      },
      {
        game: "KSA-MEX",
        h: 0,
        a: 1,
        points_awarded: 0
      },
      {
        game: "CRO-BEL",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "CAN-MAR",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "JPN-ESP",
        h: 0,
        a: 1,
        points_awarded: 0
      },
      {
        game: "CRI-GER",
        h: 0,
        a: 1,
        points_awarded: 0
      },
      {
        game: "KOR-POR",
        h: 1,
        a: 2,
        points_awarded: 0
      },
      {
        game: "GHA-URU",
        h: 0,
        a: 2,
        points_awarded: 0
      },
      {
        game: "CAM-BRA",
        h: 0,
        a: 2,
        points_awarded: 0
      },
      {
        game: "SER-SWI",
        h: 1,
        a: 2,
        points_awarded: 0
      }
    ]  
  }
]

module.exports = { results, players }