package module2.exercise2_search;

import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")

        };

        System.out.println("===== Linear Search =====");

        Product linearResult =
                SearchAlgorithms.linearSearch(products, "Shoes");

        if (linearResult != null)
            System.out.println(linearResult);
        else
            System.out.println("Product not found.");

        Arrays.sort(products,
                Comparator.comparing(Product::getProductName));

        System.out.println("\n===== Binary Search =====");

        Product binaryResult =
                SearchAlgorithms.binarySearch(products, "Shoes");

        if (binaryResult != null)
            System.out.println(binaryResult);
        else
            System.out.println("Product not found.");

    }
}