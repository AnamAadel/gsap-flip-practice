const boxes = gsap.utils.toArray(".box");
const filledBox = document.querySelector(".filledBox");

gsap.registerPlugin(Flip);

gsap.set(filledBox, {rotation: 360})

boxes.forEach((box)=>{
    
    
    box.addEventListener("click",()=>{
        let state = Flip.getState(".child");
        // let state2 = Flip.getState(".child");
        if(!filledBox.children[0]){
            filledBox.appendChild(box.children[0]);
            
        }else if(filledBox.children[0]){
            boxes.forEach((emptyBox)=>{
                if(!emptyBox.children[0]){
                    emptyBox.appendChild(filledBox.children[0]);
                    filledBox.appendChild(box.children[0]);
                    
                }
                // Flip.from(state2, {duration: .5, ease: "power1.inOut"});
            })
        }
        Flip.from(state, {duration: .5, ease: "power1.inOut",absolute: true ,  stagger: 0.1});
    })
})

filledBox.addEventListener("click",()=>{
    let state = Flip.getState(".child");
    
    boxes.forEach((emptyBox)=>{
        if(!emptyBox.children[0]){
            emptyBox.appendChild(filledBox.children[0]);
        }
        // Flip.from(state2, {duration: .5, ease: "power1.inOut"});
    })
    Flip.from(state, {duration: .5, ease: "power1.inOut",absolute: true ,  stagger: 0.1});
})
console.log(boxes)