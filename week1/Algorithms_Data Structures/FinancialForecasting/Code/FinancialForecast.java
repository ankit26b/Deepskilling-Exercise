public class FinancialForecast {

    public static double forecast(double P0, double r, int n) {
        if (n == 0) {
            return P0;
        }
        return forecast(P0, r, n - 1) * (1 + r);
    }

    public static void main(String[] args) {
        double initialValue = 100.0;
        double growthRate = 0.08;
        int years = 10;

        double result= forecast(initialValue, growthRate, years);

        System.out.printf("Future Value (Recursive): $%.2f%n", result);
    }
}
