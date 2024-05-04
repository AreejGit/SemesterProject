import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'; // Import necessary components
import { useNavigation } from '@react-navigation/native';
const imageUrls = [
    { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jurist.org%2Fnews%2F2024%2F01%2Fpakistan-senate-passes-resolution-calling-for-punishment-against-propaganda-targeting-army%2F&psig=AOvVaw2OSKQsIi5lN5L4I6y8ugvL&ust=1714833424352000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjW8_fZ8YUDFQAAAAAdAAAAABAE', alt: 'Pakistan' },
    { src: 'https://www.google.com/imgres?q=turkey&imgurl=https%3A%2F%2Fcdn.britannica.com%2F82%2F4782-050-8129909C%2FFlag-Turkey.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fplace%2FTurkey&docid=b60I4SYPRHIEMM&tbnid=gqVOCILo4PqvvM&vet=12ahUKEwiWwMeo2_GFAxXPevEDHXDtBEkQM3oECE8QAA..i&w=1600&h=1067&hcb=2&itg=1&ved=2ahUKEwiWwMeo2_GFAxXPevEDHXDtBEkQM3oECE8QAA', alt: 'Turkey' },
    { src: 'https://www.google.com/imgres?q=japan%20flag&imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F02%2F10%2F66%2F61%2F360_F_210666170_frmhgQbLNojl1Yik2GNzdwqQyOKPNuEt.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Djapan%2Bflag&docid=OXG-TgaYAJGANM&tbnid=GFybrh1jaUv22M&vet=12ahUKEwiwtrnU2_GFAxVcQvEDHbr4Cb0QM3oECGQQAA..i&w=540&h=360&hcb=2&ved=2ahUKEwiwtrnU2_GFAxVcQvEDHbr4Cb0QM3oECGQQAA', alt: 'Japan' },
    { src: 'https://www.google.com/imgres?q=canada&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd9%2FFlag_of_Canada_%2528Pantone%2529.svg%2F640px-Flag_of_Canada_%2528Pantone%2529.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCanada&docid=aHH35aAThFy62M&tbnid=YLcoi6ORaIOCLM&vet=12ahUKEwjX15_d2_GFAxU-AtsEHeA6CtcQM3oECBQQAA..i&w=640&h=320&hcb=2&ved=2ahUKEwjX15_d2_GFAxU-AtsEHeA6CtcQM3oECBQQAA', alt: 'Canada' },
    { src: 'https://www.google.com/imgres?q=germany&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fb%2Fba%2FFlag_of_Germany.svg%2F1200px-Flag_of_Germany.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGermany&docid=zUh2PrlW8UbyZM&tbnid=ozne88Stjf41mM&vet=12ahUKEwjChPfs2_GFAxV7SfEDHUfECW8QM3oECBQQAA..i&w=1200&h=720&hcb=2&ved=2ahUKEwjChPfs2_GFAxV7SfEDHUfECW8QM3oECBQQAA', alt: 'Germany' },
    { src: 'https://www.google.com/imgres?q=india&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F41%2FFlag_of_India.svg%2F1200px-Flag_of_India.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIndia&docid=yZ4zdr9zkzDXqM&tbnid=JezHGoVZ1iCwjM&vet=12ahUKEwjR5s782_GFAxVfBNsEHdYcA_UQM3oECBcQAA..i&w=1200&h=800&hcb=2&itg=1&ved=2ahUKEwjR5s782_GFAxVfBNsEHdYcA_UQM3oECBcQAA', alt: 'India' },
    { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAkFBMVEXuHCX//wDtACb71w/uFSXuACXuESb//AD94gnvMiLuFCb+9QD/+gD3oxX1kRj1jRn5wBDxTR/xVB7vJSP4rhPwQyH7zQ7xTyD5thL95Aj+7wT71AvwRyH4sRLyXB7zaRz1hhn0fRv2nBb+8QXwOSLzdBv6xhD+6QPyYx72mhnzdhzzbRv5uxH3oBX3pxT1gxk8bs7uAAAEy0lEQVR4nO3c6XqiMBQGYHMMUdyq4lJ3W6lote39390kLIpTqwljR4jf+2/G0Qc+OckhZCyVAAAAAODBiXsfQP7QW5ff+xjyIr48xJS5yCTiLT2SWQi/zpx7H0teUK/S6xPxEavQvY8lN8SKsUF3wFiATBLOjkUGyOSABlEm1T7ZPh1rTyI1vxJfKZMFWX2t8KFuKLRhB/VX91eP6r7oea5XCWLYOEQyarc6FjcptOpp1UHNW8WBtHe+ILI4EjFnY50ejJcCWTHrssxkanMeCn0yplM8vLdeDh3yZSa+5ZGUnBFjTa3iCcuFmox5lmfCh2rENGg3aLz6vaPJB/W9yxFC/5sXb4HtDRtVVSYfBh2Y2NpeOn7Ubph0pSeXiYX50GvUcmSdSry+fYUUlQ5j24y3LxS4yfKbLVcMn8ataTVrJpO6r0IRtJlbEgptkxsYg5nn5ANmLPCFTGTSsGVBkspJJq1sF4oKdezM5cd8WbJ4wPuHG91ytq9ZLJLis+YyaR0XRLLNPOTFb3+z5DKRI+Qxk6cMJyVoF89bk2JGQt/xYySsfOb1y72HEO/jw7t5EWcdb1Yt/62ayoRNvr+8vBSK2I3TkRYxFM6fmaGXy+Om39k116PjdVbAUEq0qJskUnavjRFcyPp6kv90PG6oK+W/nMWNkTvQj6TpaJ1jOBn3yd0s9x+FvPXhyS3fVfWF5kSi7g72FF4yhYxEok6gE8ma67Zg3KuzIg6vaYK3r0fSMhgvRaD3KCTPOH1dSSQYmpwkDWzYoUNu9VIkz2YDA7djVanmfP6YSOPdtBIsuEpCtGicj6R6tSmxF5XOtiqvhWxGb4V2ZyKp6/VptqKzU/KbFeNlRvywceJE+3FHk9Sa4amVd+8DuyPan593Ng9cPM4Pywb7DMVjybgsNucjYQ3zTMTSjkGI0mtu23XqD5r7/dKfFZi/J49SpTPuRmtlsWfj1t7PVHC5kyqdNhcnqyor02dXzgur/8pB/mfUSyL4ipp5cVzANp15VPMX3jcWfGWJx08hUnd8tIv3jc+0C6EWPgNy5CU2kPcEnucXubkR8+j0e07t+JfkR8/TA92vm88/P2f7tnqUWBmNglVlUOQ9olHpVP5ahq450QJ2V7t4Uk+bw4QLHImcPeUpTPi3IqGuqin95VXyDls1WMV4LSpXws1J23MrJcKTA+ZY/+Q4PcVrU6NpoSNRu8llU3L2Ja5alb5BDdAyykRvJ3Z+Ub3t/DhmkB/ozzzHZRjjtiZf+PTiDYpwtgYdirOSeaipZ1Hw/v7K4RucnZrVZZPTevDVqBPUlD0eV0+MKjY8+boJpxxt+eJO86XgxXMzXicpGSpyY39bKJgYgviGir+54tboA7/hkPDdcBMGLVgZmSSC9pxIuA38rsWB6llXr/6IsTUySdAsXiuxYp3+NngpWcbtWP1rBUaOv/Ux/vCpdv0ND0C4yW/CqLXLIUJR2+uP+yUHTx3c4EiUPFdudwkDSijcq19Vl4o1/8/tX4l3NmhNHV4v/jrj7UQFo/ZL2rG34hbiAYTarIMZ5xR3jR4APQZaFvlZ+S9BIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDqD5f/L+4rq0xdAAAAAElFTkSuQmCC', alt: 'China' },
    { src: 'https://www.google.com/imgres?q=france&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fc%2Fc3%2FFlag_of_France.svg%2F1200px-Flag_of_France.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFrance&docid=_BchAYr7cuAkDM&tbnid=58xSRJAkiXOt3M&vet=12ahUKEwinm_CP3PGFAxVKS_EDHUqtDVYQM3oECGEQAA..i&w=1200&h=800&hcb=2&itg=1&ved=2ahUKEwinm_CP3PGFAxVKS_EDHUqtDVYQM3oECGEQAA', alt: 'France' }

];

const buttonClasses = 'bg-zinc-800 text-white p-2 rounded-full';
const flagImages = [
    { src: 'https://www.countryflags.io/PK/flat/64.png', alt: 'Pakistan Flag' },
    { src: 'https://www.countryflags.io/GB/flat/64.png', alt: 'turkey' },
    { src: 'https://www.countryflags.io/JP/flat/64.png', alt: 'Japan Flag' },
    { src: 'https://www.countryflags.io/CA/flat/64.png', alt: 'Canada Flag' },
    { src: 'https://www.countryflags.io/DE/flat/64.png', alt: 'Germany Flag' },
    { src: 'https://www.countryflags.io/IN/flat/64.png', alt: 'India Flag' },
    { src: 'https://www.countryflags.io/CN/flat/64.png', alt: 'China Flag' },
    { src: 'https://www.countryflags.io/FR/flat/64.png', alt: 'France Flag' }
];
// const MainPage = () => {
//     const navigation = useNavigation();

//     const handleButtonPress = () => {
//         navigation.navigate('LoginScreen'); // Navigate to the LoginScreen component
//     };

// const MainPage = () => {
//     return (
//         <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>Break Free from Language Barriers</Text>
//             <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}>Simplify Language Exchange with Cutting-Edge Technology.</Text>
//             <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
//                 {imageUrls.map((image, index) => (
//                     <Image key={index} source={{ uri: image.src }} style={{ width: 64, height: 64, borderRadius: 32, margin: 5 }} />
//                 ))}
              
//             </View>
//             <TouchableOpacity style={{ backgroundColor: '#333', padding: 10, borderRadius: 20 }} onPress={() => console.log('Button pressed')}>
//                 <Text style={{ color: 'white' }}>Click Me</Text>
//             </TouchableOpacity>
//         </View>
//    );
const MainPage = () => {
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('Example'); // Navigate to the LoginScreen component
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>Break Free from Language Barriers</Text>
            <Text style={{ fontSize: 18, marginBottom: 20, color: 'white' }}>Empower your language journey with our immersive and personalized learning app.</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
                {imageUrls.map((image, index) => (
                    <View key={index} style={{ alignItems: 'center', margin: 10 }}>
                        <Image source={{ uri: image.src }} style={{ width: 64, height: 64, borderRadius: 32, marginBottom: 5 }} />
                        <Image source={{ uri: flagImages[index].src }} style={{ width: 40, height: 30 }} />
                        <Text style={{ color: 'white', marginTop: 5 }}>{image.alt}</Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={{ backgroundColor: '#333', padding: 10, borderRadius: 20 }} onPress={handleButtonPress}>
                <Text style={{ color: 'white' }}>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
};


export default MainPage;
