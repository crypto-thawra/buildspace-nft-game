const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    let names = ["Pepito Ray", "Brixie Pooh", "Helou"];
    let images = [
        "https://s36700.pcdn.co/wp-content/uploads/2018/09/black-and-tan-chiahuahua-600x400.jpg.optimal.jpg", // Images
        "https://i1.wp.com/readysetpuppy.com/wp-content/uploads/2019/09/The-Dos-and-Donts-of-Exercising-a-Young-German-Shepherd.jpg?fit=994%2C538&ssl=1png", 
        "https://vetstreet.brightspotcdn.com/dims4/default/c25dd68/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F7c%2F303880a80611e0a0d50050568d634f%2Ffile%2FSiberian-Husky-1-645mk062811.jpg"
    ];
    let attacks = [100, 50, 25];
    let hp = [50, 200, 100];
    const gameContract = await gameContractFactory.deploy(
      names,
      images,
      hp,
      attacks,
      "Evil Mailman", // Boss name
      "https://www.ttnews.com/sites/default/files/images/articles/feds-evs-1200.jpg", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed(); //0x3d3d5B60ab77956D13A39d3d41d6a71b9c8b52C5
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();