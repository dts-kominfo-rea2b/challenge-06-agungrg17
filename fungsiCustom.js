// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let hasilAkhir = [];
 
  const bacaFile1 = (readCallback1, nextStep) => {
    fs.readFile(file1, 'utf8', (err, data) => {
      if (err) throw err;
      const hasil1 = JSON.parse(data);
      hasilAkhir.push(hasil1.message.split(" ")[1]);
      nextStep(readCallback1);
    });
  };

  const bacaFile2 = (readCallback2, nextStep) => {
    fs.readFile(file2, 'utf8', (err, data) => {
      if (err) throw err;
      const hasil2 = JSON.parse(data);
      hasilAkhir.push(hasil2[0].message.split(" ")[1]);
      nextStep(readCallback2);
    });
  };

  const bacaFile3 = (readCallback3) => {
    fs.readFile(file3, 'utf8', (err, data) => {
      if (err) throw err;
      const hasil3 = JSON.parse(data);
      hasilAkhir.push(hasil3[0].data.message.split(" ")[1]);
      readCallback3(null, hasilAkhir);
    });
  };

  bacaFile1(fnCallback, (readCallback1) => {
    bacaFile2(readCallback1, (readCallback2) => {
      bacaFile3(readCallback2);
    })
  })
};


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
