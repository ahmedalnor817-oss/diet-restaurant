import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(DietApp());
}

class DietApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Diet Food App',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: MenuPage(),
    );
  }
}

class FoodItem {
  final String name;
  final double price;
  final int calories;

  FoodItem({required this.name, required this.price, required this.calories});
}

class MenuPage extends StatefulWidget {
  @override
  _MenuPageState createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  List<FoodItem> menu = [
    FoodItem(name: "Chicken Rice Diet", price: 30, calories: 450),
    FoodItem(name: "Tuna Salad", price: 25, calories: 300),
    FoodItem(name: "Beef Diet Meal", price: 35, calories: 500),
    FoodItem(name: "Egg Protein Meal", price: 20, calories: 250),
  ];

  List<FoodItem> cart = [];

  double get totalPrice =>
      cart.fold(0, (sum, item) => sum + item.price);

  void addToCart(FoodItem item) {
    setState(() {
      cart.add(item);
    });
  }

  void removeFromCart(int index) {
    setState(() {
      cart.removeAt(index);
    });
  }

  Future<void> sendWhatsAppOrder() async {
    String phone = "966563683212"; // رقمك بالسعودية
    String orderText = "Hello, I want to order:\n\n";

    for (var item in cart) {
      orderText += "- ${item.name} (${item.price} SAR)\n";
    }

    orderText += "\nTotal: $totalPrice SAR";

    String url =
        "https://wa.me/$phone?text=${Uri.encodeComponent(orderText)}";

    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Diet Menu"),
        actions: [
          Padding(
            padding: EdgeInsets.all(10),
            child: Center(child: Text("🛒 ${cart.length}")),
          )
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: menu.length,
              itemBuilder: (context, index) {
                final item = menu[index];
                return Card(
                  margin: EdgeInsets.all(10),
                  child: ListTile(
                    title: Text(item.name),
                    subtitle: Text(
                        "${item.calories} kcal - ${item.price} SAR"),
                    trailing: ElevatedButton(
                      child: Text("Add"),
                      onPressed: () => addToCart(item),
                    ),
                  ),
                );
              },
            ),
          ),

          Divider(),

          Expanded(
            child: Column(
              children: [
                Text(
                  "Cart",
                  style: TextStyle(
                      fontSize: 18, fontWeight: FontWeight.bold),
                ),
                Expanded(
                  child: ListView.builder(
                    itemCount: cart.length,
                    itemBuilder: (context, index) {
                      final item = cart[index];
                      return ListTile(
                        title: Text(item.name),
                        trailing: IconButton(
                          icon: Icon(Icons.delete),
                          onPressed: () => removeFromCart(index),
                        ),
                      );
                    },
                  ),
                ),
                Text(
                  "Total: $totalPrice SAR",
                  style: TextStyle(fontSize: 18),
                ),
                SizedBox(height: 10),
                ElevatedButton(
                  onPressed: cart.isEmpty ? null : sendWhatsAppOrder,
                  child: Text("Order via WhatsApp"),
                ),
                SizedBox(height: 10),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
