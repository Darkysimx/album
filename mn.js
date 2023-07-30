var images = 
[
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funiversaljp.org%2Fwp-content%2Fuploads%2F2017%2F01%2FHappy-Family-1024x576.jpg&f=1&nofb=1&ipt=0c945c287a56c9d62cc0c064c8e9c3c310a9086b2990afb9809a4b5f6f727f7a&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9f%2F64%2Fb5%2F9f64b57d35992278c898d720ac550dc7.jpg&f=1&nofb=1&ipt=9cfacb5cedaabe6c3eef52b7889a7e4ba45a2f86e776ffb3e81046e256ea6fb8&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc9%2Fe3%2Fd6%2Fc9e3d650d25b6f45888b282087713dac.jpg&f=1&nofb=1&ipt=a60fd9ba74ca8cc87b495bac90f2840343bcf729c4b0992b06b1211623a56117&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F27%2FMae_Whitman_Paleyfest_2013.jpg&f=1&nofb=1&ipt=1311f1efa82af1e3bf618e8fff2064370bba027f2cae398e5f106e393bf3a60f&ipo=images",  
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.purepeople.com.br%2Farticles%2F1%2F38%2F10%2F31%2F%40%2F4378033-para-muitos-enzo-e-a-cara-do-pai-580x0-2.jpg&f=1&nofb=1&ipt=81965044cfe07e591cedf12d3314064fade34596bc58fc9f73e1cbb2920d7589&ipo=images"
];
 var names = ["Album de familia","lucas santos","mariana santos","laura santos","rafael santos"];
 var i = 0;
 function update(){
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(i >  numbersOfFamilyMemberInArray )
    {
        i = 0
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById(" FamilyMemberImage").src = updateImage;
    document.getElementById(" FamilyMemberName").innerHTML = updateName;
 }