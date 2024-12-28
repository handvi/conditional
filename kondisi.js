const buahBuahan = [
    { nama: 'apel', warna: 'merah' },
    { nama: 'pisang', warna: 'kuning' },
    { nama: 'mangga', warna: 'kuning' },
    { nama: 'oren', warna: 'oren' }
  ];
  
  const buahBuahanBaru = buahBuahan
    .filter(buah => buah.nama[0] === 'a')
    .map(buah => ({
      nama: buah.nama.toUpperCase(),
      warna: buah.warna
    }));
  
  console.log(buahBuahanBaru); 
  