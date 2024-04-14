import java.util.Arrays;

class Solution {
    public void mergeAlternately(String word1, String word2) {

        int len = word1.length() + word2.length();
        String[] arr = new String[len + 10];

        int j = 0;
        int k = 1;

        
        for(int i = 0; i < word1.length() ; ++i ){

            arr[j] = String.valueOf(word1.charAt(i)) ;
            j = j + 2;
        }

        for(int i = 0; i < word2.length() ; ++i ){

            arr[k] = String.valueOf(word2.charAt(i));
            k = k + 2;
        }

        String merged = Arrays.toString(arr);

        System.out.println(merged);
        
    }


    public static void main(String[] args) {

        Solution obj = new Solution();
        
        obj.mergeAlternately("ab", "pqrs");
    }
}
