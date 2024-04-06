import java.util.*;
import java.util.function.BiFunction;

public class hof {
    public int add(int num1, int num2) {
        return num1 + num2;
    }
    public int mul(int num1, int num2) {
        return num1 * num2;
    }
    public int calc(int num1, int num2, BiFunction<Integer, Integer, Integer> oper) {
        return oper.apply(num1, num2);
    }
    public static void main(String[] args) {
        hof obj = new hof();
        System.out.println(obj.calc(2, 3, obj::add));
    }
}