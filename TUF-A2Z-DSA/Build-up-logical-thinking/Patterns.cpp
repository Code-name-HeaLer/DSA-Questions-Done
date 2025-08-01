// Must do Pattern Problems before starting DSA

/*
1.
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
 */

#include <iostream>
using namespace std;
class Solution
{
public:
  void printSquare(int n)
  {
    // code here
    for (int i = 0; i < n; i++)
    {
      for (int j = 0; j < n; j++)
      {
        cout << "* ";
      }
      cout << endl;
    }
  }
};
