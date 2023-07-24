var text = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sunt labore officiis ducimus deserunt minus exercitationem, cum hic in tempore, dicta sit totam officia veniam porro repudiandae amet harum. Repudiandae molestias dolorem laudantium culpa distinctio fugiat eligendi illo aspernatur", 
    
    "consectetur vitae fugit ad tenetur, dolor quasi neque quis dignissimos unde esse corporis inventore repellendus! Ab rerum ad illum labore incidunt reprehenderit, odit eveniet consequatur aspernatur. Repudiandae, cupiditate, earum nam nesciunt ratione obcaecati illum laboriosam officiis eveniet fuga quas odio atque repellat.",
    
    "Harum quibusdam natus praesentium sequi suscipit soluta? Quis ab voluptatem soluta, labore nisi deleniti obcaecati et enim iure quia neque aliquid accusantium temporibus doloremque laboriosam, assumenda quae sunt corporis sed quod magnam? Placeat, quisquam deleniti pariatur praesentium enim",
    
    "ducimus iste perspiciatis et repudiandae omnis dicta! Nobis, iusto laborum quasi omnis ut officiis, consectetur dolorem consequatur id consequuntur fuga sit asperiores inventore explicabo tenetur! Sunt, omnis optio saepe veniam odio porro laboriosam dolores impedit ut perferendis. Eveniet ratione explicabo",
    
    "illum ea repudiandae culpa fugiat, ipsa nisi, tempora ab iure dicta! Ad cumque est optio harum, laudantium consequatur sunt voluptas perferendis corrupti assumenda quia quaerat soluta a rerum nemo? Alias fugiat amet quam expedita, facere corporis deleniti cum at eum reprehenderit accusamus quas nam tempore",
    
    "dolorum nulla iure modi unde voluptas. Eius repellendus facere unde libero atque ad eos. Magnam culpa iste ut possimus molestias distinctio neque quis voluptas magni. Doloremque, amet mollitia provident consectetur dolor nisi eum hic unde fuga dolorem aliquam iusto laborum eligendi fugiat perspiciatis corrupti porro id cum.",
    
    "Sit vero ullam ipsum ratione expedita voluptates quod laudantium nostrum natus debitis labore architecto, distinctio recusandae voluptatem atque, id iure tempore amet repellendus porro incidunt, harum ipsa! Aliquid id et totam repellat eius? Facere aut voluptatibus neque, laboriosam harum ratione nostrum doloribus error. Nihil consequuntur necessitatibus perspiciatis exercitationem quis?",

    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sunt labore officiis ducimus deserunt minus exercitationem, cum hic in tempore, dicta sit totam officia veniam porro repudiandae amet harum. Repudiandae molestias dolorem laudantium culpa distinctio fugiat eligendi illo aspernatur", 
    
    "consectetur vitae fugit ad tenetur, dolor quasi neque quis dignissimos unde esse corporis inventore repellendus! Ab rerum ad illum labore incidunt reprehenderit, odit eveniet consequatur aspernatur. Repudiandae, cupiditate, earum nam nesciunt ratione obcaecati illum laboriosam officiis eveniet fuga quas odio atque repellat."

]

const btn = document.getElementById("generate");
const item = document.getElementById("num");
btn.addEventListener("click", generatePara);
function generatePara(){
    if(item.value < 0 || item.value > 9){
        
        const rand = Math.floor(Math.random() * text.length);
        
        document.getElementById("data").innerText = text[rand] + rand;
    }
    else{
        var paras = text.slice(0, item.value);
        document.getElementById("data").innerText = paras.join("\n\n");
    }

}
