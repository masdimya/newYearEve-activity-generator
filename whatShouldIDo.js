class WhatShouldIDo{
    constructor () {
        this.words = require('./words.json');
    }
    

    getRandomElement(array){
        let index = Math.floor(Math.random() * array.length);
        return array[index]; 
    }

    randomActivity(){
        let verb = this.getRandomElement(this.words.verb);
        if (verb == "memasak" || verb == "makan" || verb == "bakar") { //rules 1
            let sentence = "{verb} {food} bareng {people} di {place}";
            sentence = sentence.replace("{verb}" , verb);
            sentence = sentence.replace("{food}" , this.getRandomElement(this.words.food));
            sentence = sentence.replace("{people}" , this.getRandomElement(this.words.ObjectPeople));
            sentence = sentence.replace("{place}" , this.getRandomElement(this.words.place));
            return sentence;
        }
        else if(verb == "nonton"){ //rules 2
            let sentence = "{verb} {watch} bareng {people} sambil nyemil di {place}";

            sentence = sentence.replace("{verb}" , verb);
            sentence = sentence.replace("{watch}" , this.getRandomElement(this.words.watch));
            sentence = sentence.replace("{people}" , this.getRandomElement(this.words.ObjectPeople));
            sentence = sentence.replace("{place}" , this.getRandomElement(this.words.place));
            return sentence;
        }
        else if(verb == "chatting-an" || verb == "video call"){ //rules 3
            let sentence = "{verb} bareng {people} sambil makan {food} di {place}";

            sentence = sentence.replace("{verb}" , verb);
            sentence = sentence.replace("{people}" , this.getRandomElement(this.words.ObjectPeople));
            sentence = sentence.replace("{food}" , this.getRandomElement(this.words.food));
            sentence = sentence.replace("{place}" , this.getRandomElement(this.words.place));
            return sentence;

        }
        else if(verb == "main"){ //rules 4
            let sentence = "{verb} {play} sambil nyemil {food} bareng {people} di {place}";

            sentence = sentence.replace("{verb}" , verb);
            sentence = sentence.replace("{play}" , this.getRandomElement(this.words.play));
            sentence = sentence.replace("{food}" , this.getRandomElement(this.words.food));
            sentence = sentence.replace("{people}" , this.getRandomElement(this.words.ObjectPeople));
            sentence = sentence.replace("{place}" , this.getRandomElement(this.words.place));

            return sentence;
        }
        
    }

    shareToWhatsApp(activity){

        function capitalize_Words(str)
        {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

        
        let message = `Apa Yang Harus Saya Lakukan Di Malam Tahun Baru ini ? ... \n
        \"${capitalize_Words(activity)}\"
        Generate By https://masdimya.me/what-should-i-do
        `;
        return `whatsapp://send?text=${encodeURIComponent(message)}`;
    }

    get activity(){
        let activity = this.randomActivity();
        let whatsAppText = this.shareToWhatsApp(activity);
        return {
            'activity':activity ,
            'shareWhatsApp' : whatsAppText
        }
    }

}

module.exports = WhatShouldIDo;