/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const my_nfts=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mint_NFT (name,city,sem,university) {
    const my_nft={
        "NAME":name,
        "CITY":city,
        "SEM":sem,
        "UNIVERSITY":university
    }
    my_nfts.push(my_nft);
    console.log("Minted: "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<my_nfts.length;i++){
        console.log("ID:\t"+(i+1));
        console.log("\nNAME:\t"+my_nfts[i].NAME);
        console.log("CITY:\t"+my_nfts[i].CITY);
        console.log("SEM:\t"+my_nfts[i].SEM);
        console.log("UNIVERSITY:\t"+my_nfts[i].UNIVERSITY);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+my_nfts.length);

}

// call your functions below this line
mint_NFT("RAHUL","CHANDIGARH",3,"chandigarh university");
listNFTs();
getTotalSupply();
