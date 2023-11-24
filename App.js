import { SafeAreaView, Text, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import { useFonts, DavidLibre_700Bold } from '@expo-google-fonts/david-libre';
import { Bungee_400Regular } from '@expo-google-fonts/bungee';
 
export default function App() {

  let [ fontsLoaded, fontError ] = useFonts({ DavidLibre_700Bold, Bungee_400Regular })
  
  if ( !fontsLoaded && !fontError ) { return null; }

  const ranking = [

    {piloto: 'Posição | País | Piloto | Pontos'},
    {piloto: '1°) 🇳🇱 Max Verstappen - 549'},
    {piloto: '2°) 🇲🇽 Sergio Pérez - 273'},
    {piloto: '3°) 🇬🇧 Lewis Hamilton - 232'},
    {piloto: '4°) 🇪🇸 Carlos Sainz - 200'},
    {piloto: '5°) 🇪🇸 Fernando Alonso - 200'},
    {piloto: '6°) 🇬🇧 Lando Norris - 195'},
    {piloto: '7°) 🇲🇨 Charles Lecrerc - 188'},
    {piloto: '8°) 🇬🇧 George Russell - 160'},
    {piloto: '9°) 🇦🇺 Oscar Piastri - 89'},
    {piloto: '10°) 🇨🇦 Lance Stroll - 73'},
    {piloto: '11°) 🇫🇷 Pierre Gasly - 62'},
    {piloto: '12°) 🇫🇷 Esteban Ocon - 58'},
    {piloto: '13°) 🇹🇭 Alexander Albon - 27'},
    {piloto: '14°) 🇯🇵 Yuki Tsunoda - 13'},
    {piloto: '15°) 🇫🇮 Valterri Bottas - 10'},
    {piloto: '16°) 🇩🇪 Nico Hülkenberg - 9'},
    {piloto: '17°) 🇦🇺 Daniel Ricciardo - 6'},
    {piloto: '18°) 🇨🇳 Guanyu Zhou - 6'},
    {piloto: '19°) 🇩🇰 Kevin Magnussen - 3'},
    {piloto: '20°) 🇳🇿 Liam Lawson - 2'},
    {piloto: '21°) 🇺🇸 Logan Sargeant - 1'},
    {piloto: '22°) 🇳🇱 Nyck De Vries - 0'}

  ];

  return (

    <SafeAreaView style={estilos.container}>

      <Text style={estilos.titulo}> Campeonato Mundial atual da F1 2023 </Text>
      <Image style={estilos.logo} source={require('./assets/logo.png')} />

      <FlatList style={estilos.ranking} data={ranking} renderItem={({ item }) => (
          <SafeAreaView style={estilos.itensPilotos}>
            <Text style={estilos.textopiloto}> {item.piloto} </Text>
          </SafeAreaView>
        )}
      />

    </SafeAreaView>

  );

}
const largura = Dimensions.get('screen').width;
 
const estilos = StyleSheet.create({

  container: { flex: 1, justifyContent: 'center', backgroundColor: '#000000', padding: 8 },

  titulo: { margin: 24, fontSize: 15, textAlign: 'center', color: '#990000', fontFamily: 'Bungee_400Regular' },

  logo: { display: 'flex', width: 280, height: 100, alignSelf: 'center', borderRadius: 20, margin: 5 },

  ranking: { display: 'flex', backgroundColor: '#000000', borderRadius: 20, width: 280, alignSelf: 'center' },

  itensPilotos: { borderRadius: 20, margin: 2 },

  textopiloto: { margin: 10, textAlign: 'center', backgroundColor: '#990000', padding: 10, fontFamily: 'DavidLibre_700Bold' }

});
 
