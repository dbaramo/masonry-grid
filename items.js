const posts = []

const images = [
    'https://blogs-images.forbes.com/olliebarder/files/2015/06/akira_newwriter_cover.jpg',
    'https://images.pexels.com/photos/7389406/pexels-photo-7389406.jpeg',
    'https://images.pexels.com/photos/12484823/pexels-photo-12484823.jpeg',
    'https://images.pexels.com/photos/11932111/pexels-photo-11932111.jpeg',
    'https://images.pexels.com/photos/12504879/pexels-photo-12504879.jpeg',
    'https://images.pexels.com/photos/1592119/pexels-photo-1592119.jpeg',
    'https://images.pexels.com/photos/1876876/pexels-photo-1876876.jpeg',
    'https://images.pexels.com/photos/7668679/pexels-photo-7668679.jpeg',
    'https://images.pexels.com/photos/2770933/pexels-photo-2770933.jpeg',
]

let imageIndex = 0;

for(let i = 1; i < 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item)
    imageIndex++
    if(imageIndex > images.length - 1) imageIndex = 0
}