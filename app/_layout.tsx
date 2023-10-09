//import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Bem-vindo!",
          title: "Bem-vindo!",
        }}
      />
      <Drawer.Screen
        name="telaAgendamento" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Agendamento",
          title: "Agendamento",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="telaRegistros" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Registros",
          title: "Registros",
          drawerItemStyle: { height: 0 }
        }}
      />
    </Drawer>
  );
}