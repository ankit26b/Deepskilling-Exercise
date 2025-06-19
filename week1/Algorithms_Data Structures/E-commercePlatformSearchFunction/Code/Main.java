public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Smartphone", "Electronics"),
            new Product(4, "Book", "Education"),
            new Product(5, "Headphones", "Electronics")
        };

        Product result1 = SearchEngine.linearSearch(products, "Book");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not found"));

        Product result2 = SearchEngine.binarySearch(products, "Book");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not found"));
    }
}
