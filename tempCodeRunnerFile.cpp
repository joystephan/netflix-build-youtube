#include <iostream>

using namespace std;

// Function to calculate minimum banknotes
void minBanknotes(int oneCentCount, int fiveCentCount, int tenCentCount) {
    int totalValue = (oneCentCount * 1) + (fiveCentCount * 5) + (tenCentCount * 10);

    int tensCount = 0, fivesCount = 0, twosCount = 0, onesCount = 0;

    // Count $10 banknotes
    tensCount = totalValue / 10;
    totalValue %= 10;

    // Count $5 banknotes
    fivesCount = totalValue / 5;
    totalValue %= 5;

    // Count $2 banknotes
    twosCount = totalValue / 2;
    totalValue %= 2;

    // Count $1 banknotes
    onesCount = totalValue;

    cout << "Minimum Banknotes Required:" << endl;
    cout << "$10: " << tensCount << endl;
    cout << "$5: " << fivesCount << endl;
    cout << "$2: " << twosCount << endl;
    cout << "$1: " << onesCount << endl;
}

int main() {
    int oneCentCount = 4;
    int fiveCentCount = 2;
    int tenCentCount = 1;

    minBanknotes(oneCentCount, fiveCentCount, tenCentCount);

    return 0;
}
