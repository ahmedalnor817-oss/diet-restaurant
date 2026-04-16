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
  State<MenuPage> createState() => _MenuPageState();
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
    String phone = "966563683212";

    String orderText = "Order Details:\n\n";
    for (var item in cart) {
      orderText += "- ${item.name} (${item.price} SAR)\n";
    }
    orderText += "\nTotal: $totalPrice SAR";

    final url =
        "https://wa.me/$phone?text=${Uri.encodeComponent(orderText)}";

    await launchUrl(Uri.parse(url),
        mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Diet Restaurant"),
        backgroundColor: Colors.green,
      ),

      body: ListView(
        children: [
          /// MENU SECTION
          Padding(
            padding: const EdgeInsets.all(10),
            child: Text(
              "Menu",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
          ),

          ...menu.map((item) {
            return Card(
              margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              child: ListTile(
                title: Text(item.name),
                subtitle: Text("${item.calories} kcal - ${item.price} SAR"),
                trailing: ElevatedButton(
                  onPressed: () => addToCart(item),
                  child: Text("Add"),
                ),
              ),
            );
          }).toList(),

          Divider(),

          /// CART SECTION
          Padding(
            padding: const EdgeInsets.all(10),
            child: Text(
              "Cart",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
          ),

          if (cart.isEmpty)
            Padding(
              padding: EdgeInsets.all(10),
              child: Text("Cart is empty"),
            ),

          ...cart.asMap().entries.map((entry) {
            int index = entry.key;
            FoodItem item = entry.value;

            return ListTile(
              title: Text(item.name),
              trailing: IconButton(
                icon: Icon(Icons.delete, color: Colors.red),
                onPressed: () => removeFromCart(index),
              ),
            );
          }).toList(),

          SizedBox(height: 10),

          Padding(
            padding: const EdgeInsets.all(10),
            child: Text(
              "Total: $totalPrice SAR",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
          ),

          Padding(
            padding: const EdgeInsets.all(10),
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
                minimumSize: Size(double.infinity, 50),
              ),
              onPressed: cart.isEmpty ? null : sendWhatsAppOrder,
              child: Text("Order via WhatsApp"),
            ),
          ),
        ],
      ),
    );
  }
}
