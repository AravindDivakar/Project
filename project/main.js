const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 4,
    name: "Backpack",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500"
  },
  {
    id: 6,
    name: "Camera",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhISEBIVEhUQFRUWFQ8VFRUREBAVFhYWFxUVFRcYHSghGBolHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDisZFRkrKysrLSsrKystLSsrLSsrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHAQj/xABAEAACAQIDAwgGBwgCAwAAAAAAAQIDEQQSIQUTMQYHIjJBUWFxI0JygZGxFDNSkqGywUNTYnOCosLRNGMkRKP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAABFXxEKavOUYp6Jyajd9yuBKDXcRy0wUXFRm6jm2lkj0bxtfWVlbXsMJLnFUnS3dFJVXJXlO7SjbWyX69gG+g5hS5wMVU3DW7iqk5J5YNqytbi3Z6ltQ5a41/R81ZLeVZqSyU+lFZbJdHTi/iWDrAOS0OW2N9DnrWz1pRalCl0oq2nV7L9neTUOXWMjkzSjLNXcHeEb5V2dG2og6oDm+G5xqumenSkt86bcXKNlrZ6t3ehl8Hzg4eWlWnOn6V0rpqaT7G+Dt7mQbiDG7O29hcR9VWi3dxyt5Z5o8VllZmSAAAAAAAAAAAAAAAAAAAAAAAAAAAAWu0NoUsPDPVmors75Puilq34IteUG2oYSnnlrKWkIfaf8ApdpxzbnKCrWxClUndxjNx1jGKkoSkklLRWtw9/YywbftXnClKUNwlSpyc25zV5yjBXbVrqN9dNXZcTTp7UnOVGdSVScstWq5Nqbbd7JZpaLoqzdo6mGoYv6qz4UKjaUpK195rpmSXj0VppJ8C3p1leleyy0qraaSy3dTpa0lZfxPKn3vtqMpQxbW5/gp1Zu8FF36XfNZeC1fR8eJDhcal9G1V2qjSW7Wt3qkpNt6cY38E2YyNdXpRVrqnUy2dNNN5+quhK/jFR9vtSjWlal1rKE7v0jh23zNSnD7zl4q1kwyOExL/wDGcr3Uqj9fThx6MVb2l77EWz8Y7YfJw3s28lsvqcd2px4d8o/DpGNwtdegtZ2zWayPt7LZHf2Yvwd9FTTrK9DNxUpWz9bjHhvln4/ZfHxAyOAxsnGjl/fNvJw9W193vV38ZL+rimGxicYWtbf36GkfC+6nJfGXlfUxcav1WfiqkrbzSXq3a3+Z93B+d2eyrO0c17qq7Zs2b3b6SfwfmBlamOaTzP8A9nRvIvtcM0Yr7ubxtxdc8Xbe2t0MSpK0Fonm7p9HzlZfEwu/fSy8d9qo5r+ta+SMX8VLw7zyviNJO9/TJrWGj6Sds02r+WV/IDYqmOcXUfS6GJjNJQy3vm4NvTs6T6L0s9UbLsrltiMJJw3m8hDEZclW8p7ufBQfFWtprbwsc7xFZWq8NaqlfKtLOXSfo9Paf3u+ati2lX4pOrF9sV26u0Fb2r/166wfQvJ3lXh8beMXkqxbUqMrZrx45XwkvLXVXSM8fMtTakoSqShJxksRCUGnaWZqV3dvNra+mmitornZuQvLFYpRo12lVteMuCqq1/vW+IVugAIAAAAAAAAAAAAAAAAAAAAADlnOZjH9KUL6QpxsvGTbb+XwNCx8XnhUi7LWMneSy5k0pNx1tdpPilZNp2N952cI41qdVevTt5uLd18JL4mhU65rEY2jUclSfSfQqNSy1rWea008+if2l033LQ8j+za6OWnN5Xvqduv01raPttN+HAvamz4SeaGklJyyty3eaSjFyVneMrRVmtE9bGPeHq03BbucUpVLShUcoRjZNVJXvmqavjZOyVgPYVb5E3dyhNZd5130ll3dVXqPz6L4d5RurODsujCVpOGXL1nfPT6NNeNm09e4ijXuoKUpawm8laCm5J51eVTrRg0mrJaJPvuVYdL0eVJdCdt1NrXpdWlPWUvO6fDsApw8nLdO+br9JSjVXirzWe/eo9+mrPcLaKpKOizS0UnTXq+pO7n7n4FUJO9JSlq09KsHvXq7Wmuqu58U7s8UtaOq1k+CjXT1Xr2WT3eYFFJ5VTSWTpvTTD93qu6l+nvIcqStFftOqoqP9tW/wXvKoz6MNIr0j6iWIj2atvq+7jxFeSSV5QXpHx9PHxV7LK+/tfuIKG8+bhLLV751VHj32cPMrqyUbtvjNetGGbjpdaS8mR4hPpZnPSosuaShbj1Zdv6EVSpGLnZxj6Raxi5a69ZS0968QJqrbzXskqid/SKyV9VwafirpntWXWtFq1RPqtNPXpaP+5a95b3lJtJVHap9rWHHWLtqvB8C4oYGT1naHSzWi22nfiuKX4+4CROU3KKbTdW7TzLJFcZNXa7Y2779jVzP4XGypSjKDyum04tcYuOqf4GJpKMFlirJe/3t9pPhenJLs7QPprCVc9OE368Yy+KTJi32f9VT9iH5UXBFAAAAAAAAAAAAAAAAAAAAAGm86mHUsGp9tOpGz8JJpr5fA4rUdmdY52ds5VRwkVrVTqzfdGGkUvN3f9PicnrcS4iWlie8vaWIMQSQKMtNQlfNFO6abtq0+Kb7i2q7NoO1ouNouCcXbLF34X0v0nr4kEaj7yvfMCKnspQUVGpJRhe8GlKM83WUuGjWhC9ltZMtTIoNtxjGUYzu11rzfdbyLp4jwIpYgC0ey5dG1RQyyzejhkT4aNZuy2j8Tx4C17TyXlfoRa8lrJ8CaeJIJ4kgoezqXSvmeZ3tdJX17l4le5pq7UFd8b63+JBPEvuLeeIkBkJVS3q4lLtLCpUk+0iAvHiG+Bldk9ZGEpGb2R1kB9NYH6un7Efkiciwi6EPZj8kSkUAAAAAAAAAAAAAAAAAAAAAcm516C+l0p63VG1raWvLW/fdrT/Rz2txOmc6311P+WvzSOZ1uJURIkiiNEsCiRBo9R6wIpIhmieR7PCz3W+t0HU3Wa6+sy58tr36ut+AFhNEE0XMy3mgIJEMkTyIZEEUigrkUATUjN7H6y80YSkZzY3Xj5oD6bw/Uj7K+RIU0lovJFRFAAAAAAAAAAAAAAAAAAAAAHMudf62n/L/AMpHMax0/nY+spfy/wDKRzCsaRGiSBGiWAEiPWInrAjkZzYm2qNOhLC18PKvCvWzO3WScIxW6S13iaVrW4mEkbbyY21TweBqVZw3kvpTjSjppN0I6t+qsqkrrXW3aBBPkHNVl01Kg3dtuUMRlaejjltfh3eS4Gh3uk/Az9blJi5Vt/Ko3JO6p3kqK4pRyJ2tqYCStoBDMikTTIZEEUigrkUAS0jObE68fNGDpGd2EvSQ9pfMD6dR6ARQAAAAAAAAAAAAAAAAAAAABzTnZ69L2P8AJnL6x1LnZ61H2H8zltY0iNEsCJEsAJYnrPInrAokZ3ZeBwU8HKpipui1iska0KeepJblS3bai3l4y7rowMjZeRXJuGKz16zvSoytukm3UkkpWkl6qTWi1fDzgqXJTByo/SFiKqpWbzygqd0u1KUbtd2mvYaIzeuUNTF7QrRpRo1aFBO0c9KpCOidp1NNOGi7L95ojd1fvKIpkMiaZDIgikUFcigCWmZ/k6vS0/bj80YCmbFyYV69Fd9SH5kB9MgAigAAAAAAAAAAAAAAAAAAAADmvO27SoeMZ/FO/wDv4HLq3E6bzy6PBv8AikvjFr9TmVYqI0SwIUTQKJYnrPEegUSMzsHE42dN4bBKSbqb6VSEsjSyKGWUnoo6J97a7TDSNkobQqYPZsJUHkniq9RTqpJyjGmklFdz7b+MrcQGPjtbB2rVpyrQhrJKo5wStbprR2142srcTRmrK3cbVyf29iXXp06lSdaFaWSUKknU0lpdZtVa/wALmtY2koTqQXCE5xXlGTS+QFpMhkTSIZEEUigrkUAS0zZOSf8AyaH82n+ZGt0zZuRyvisMv+6n+dAfSoAIoAAAAAAAAAAAAAAAAAAAAA5rzw0M30R3soOcrd7skl/df3HLqx1nncj0MO/GovyHJaxURolgRIlgUTRPWUo9AokZ7k5tLCulPCY5PczmqkKivejUtlbutVdW1809GzAyMzhMNhoYKdetQdWpUrOlQtVqU79BNtqLtli/B3bsBfVpbMwCdTDVHiK1nu7yVRQbVrvLFRXv17uJolRt6t3b4vtb7zo20dkYGg6GDnSbqV4v/wAldeM+Cle/bK9ktNNUc6rQcW4vjFtPzTswIJEMiaRDIgikUFcigCWmbRyK/wCZhf59L88TVqZtfIRXxuEX/fS/CaA+kQARQAAAAAAAAAAAAAAAAAAAABoHPFjo0sNRi0m6lXj2xioSzNe9xOQ1WdN586LdLCyXqSqX96h/o5XRleMfL5FxFcWSwIESwKJ0VMoiz3MBTI23k5gvpuHoUoyjGeDxO8lCTd50Z5XJxsnd3Vu7vaujUZEUwN+2lQlido76FpU8GlFtSis1WKlPJG743nG7emj1ObVpttuXGTbfm3d/iVVIruXwIpAQyIpEk2RSZBHIoKpFAEtM27m5xkKW0MI5pNSqKGvY5pwg/vSRqFMzvIum54/CJdlek/hOL/QD6gABFAAAAAAAAAAAAAAAAAAAAAGC5ZbC+nYaVNWU49Km3wzLsfg+B8/Y7DzpTlTqRcJQdpQas4tdlj6eNa5X8jcPtGN5ejrRVo14q78FNetH8e5lHz+mTQZleUXJLGYBvfU3KHZXheVJ+b9V+DsYaDKiWtiIwV5fDtZYR29SvZqa8bJ/JkuPoucdOK1t3mFjhrN3WviQZtbRov1vjFr9BLFU/tR+JiMhS6YGTniaf2o/Egniaf2l8yxdModMC4qY2C4Xfkv9nlOsp8L+8tJUi5w0MquBVIoZ7Iv9ibCxeNnkwtGdZ31cVanD2pu0Y+9gWUGdW5m+S9SdVY2rHLTp33V1bezatmXfGKb177dzMnyO5oKdJxq7Rkq0lqsNC+4i/wCOT1qeVkvM6nTgopKKSSVkkrJJcEl2IKqABAAAAAAAAAAAAAAAAAAAAAAAAB5KKas9U+K7Gattjm/2fibvdbmT9ek8n9vV/A2oAcnx/NNVV3h8RCS7I1IuD+Mb/IwGM5vNpw/YKou+E4S/BtP8Du4LR834rktjIdfBVl4qjJr4pWMbW2TUj1qE4+dOa/Q+ogKPlSWDf7t/dZVDZFeXUw9WXs0py+SPqkAfMuE5FbTq9TBVl7cNyv8A6WNi2bzP7QqNb+dLDrtu3VqL+mPRf3jvAINA2FzSbOoWlWUsVJfvHlpe6nHRrwk5G9YbDwpRUKcIwjHRQilGMV4JaIlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAD/2Q=="
  },
  {
    id: 8,
    name: "Gaming Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  },
  {
    id: 9,
    name: "Keyboard",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500"
  },
  {
    id: 10,
    name: "Tablet",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
  },
  {
    id: 11,
    name: "Electric Kettle",
    price: 29.99,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhASFhMWFhUYFRASFhAQFRISFRIYFhcVFxUYHSggGBolGxUVITEiJSkrLi4uFx8zODUtNygtLisBCgoKDg0NFRAPFislFx0rKys3NS03NzY3Mi4uKzcrLS0rNy4rMC0tKzcvKy0tMCsrLSsxKys3ODI3LSsrKys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAcFBggDAgH/xABGEAABAwICBAkGDgAGAwEAAAABAAIDBBESIQUGBzETMkFRYXGBkaEiI2KCsbMUJDNCUlNyc5KissHC0UNjw9Lh8BVUgzT/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQADAAIDAAAAAAAAAAAAAAECAxEhMRJBYf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAXjWVccTDJI9rGDe5xsP8Ak9Cjae0m2lp5ahwJEbC7CMsR5BfkubKitJa6x1j71MUpdycE9wA+yxxs1Ub3pPbDSxuLYqSplA/xAImsd0izi63W0KFPtfOA4aINeR5OKXHYnddoYL9Vx1rUDT6Hfn8JrWHmkhjdb8BKg1dLo1ouypqXnmbA0Hvc5oQbnTbWKkWD4oXc5Ae0n81vBbHonajSyECaN0XpAiRo6TkCB2FVHRR0D74pqttueGE3/DIfFSmx6NG52kXdUdKwHveSg6IpKyOUExva4AkEtINiDYg8y91y/pjSTi5uBj2NDWtFyXF2EWxOPPYDuUEVsv0nd6cHVyLl+i1grYz5upmb9mR4HcDZbToranpGGwlDZm+m0Ndbocy3iCnBe6LQdTtp8FbMYJIuAefkyZOEa8/RJwtwu5ufdvsDvygIiIPCie4tu4gnE8XAwiwkcBlc8gC91HoOJ68nvHKQgIiICIiAiIgIiICIiAiIgjVNdHG4Nc4hxBIAa5xIBAJyHSO9QqjWOlZxpCPUl/2rw1o8jgZvoSYXfYkFj4hq9onAjOxHMcwg0/X7W2OSmDad5ONxBJa5t7clnDMZrTtTNAsqpDjY0BouSwcGcTjlxLcgKyOv1TFJIGxxsbY5YWtbfPMm29bNs3oMMGO2b3E+qPJHsJ7VR9u2f0xHGkHUWn9QKwemdRaaJjnmSos0E2BhG4fdq0HjJalrxLhpZT6B8QoNF1Q1Zo6nEGuqG4SMi6E3/Itzi2eUls3Sn13N/TZalskkvI/P/t1b8YQVNr9qhBTxxvjZdgkaJMd5DhcbXxOuRn0qu9M0AjLrADC4g25WnNp8QugtcaHhaSZvLgJH2m+UPEKktNgOAfa+JmY5yAcv1DtCsGpcIR/0L3i0g5vVzHMeKxkjg02xDoPOEa++5wPaEGxQPZIQWnBJyEbj/fUrK1J2lTRyR0laLtc5rGVF7FpcbDETvbe2ZzHOdypmOUhZ6klbOzg5MzyEoOqUVebI9aHzxOo53Ez04GF7jd0tPua4nlc02aT0tO8lWGoI9BxPXk945SFHoOJ68nvHKQgIiICIiAiIgIiICIiAiIgxms0GOllHM3F+A4/4rUJ9OWphnZ7hY9BacLvEFWBKwOBadxBB6iLKmK+PDlnc5u6HbiB2hx7SrBh6i73lyuTV2kEcTGfRa0dwVWaNpcUsbfpSN7gcR8AVcdEywSj1l3LSNo7rUUvUB3lbxNuWhbTf/wAcnZ7VBpuyN3niOj91dcSozZS8iot0H9leMSD8qWXBHOFz/rBEYn8H9GWRg6w67R2kN710I4KmNqVAWPme3feOUdFxgPi0lBJ2IPiZUVEBa042BzSQDkx3FHW2QH1Vatbq9RTC0tJTv+3FE7xIVDai6Q4GvppBk0vDT9iTyc+pkjT2LoxWisdbNjtHMwvovi028Mu50DzzOablnW3dzFUlwUkUj43tLZYnlr28zmmx8V12uaNeo7aZrmkbyD3xMdfxQe+gdMGmqKetbuY4CUDlid5Mgty5EkdIC6PaQRcbjuK5V0U7E18Z5susLonZ7XmfR1M8m5EeBxO8uiJjJPXgv2pRmqDievJ7xykKPQcT15PeOUhQEREBERAREQEREBERAREQFUutdOI6mRjTcF5d1YgHW7CXBW0qj1mlx1kx5nlv4cv2Vg+9WoMVTEOYPf3ANH6laVO3JV3qdHepcfoxNHa5zifYFY8W5QfM+5V3tTfakd0uaFYc5yVZ7W5LUwHO8exBpuy+S1UO32K+YdyoDZtJarZ1/sr+hOSD1KrTaZTEy25JKeRo+3GS4fqKsorStoMedM7/ADXN7HxOH7IKOopDhaRvBGfUS32CNdTaMqhLDHKN0kbH/iaHfuuV424S9v0XvHdZ3+mV0bs6qeE0dTnmaWfge5g8GhWjZFQO2igMGlo57eRURNz9OPzbh+Ex96v5aHtm0CKrRz5B8rTHhmHoAtI3qLbnraFBRejzhmI51eexma9FIz6uokA+y5jH+1zlQ9O+7o3/AEh43srr2Kv8iqbzSsd+Jlv4qiwqDievJ7xykKPQcT15PeOUhQEREBERAREQEREBERAREQFTFS/FNI7ne4/mKuV7rAnmCpWnzd2rU9DatR23lnPMWN7mA/yW/wAe5aJqKPljzynwa0Le2blkeNSclVu11/mWD0j7FaNSVVO18+aj+0fYg0vUB9qpn2guhaY5LnHUt9qhh9ILoqkdkOpBKK1PX+O8MbvoTwnsMgb/ACW1uK17XIfFJj9FjnDraMQ8QEFBaRZhqZ2/5l/xPLP5q79jlRj0fb6Mrx3hr/5KlNZPJrJuq/4S1yt3Ye/4pM3mm/02j+KosdYjXAXoKsH/ANef3Tll1gNfqgR6Oq3H6h47XDCPEqQczUPyUPWfaFdmxNvk1Z9OIdzCf3VLUbfIgHQT+b/hXlsUhtSTvtx6h1ulrYox7cSo3ug4nrye8cpCw9U+URt4LhMRlfcsEbgG8I65eHAkt6G2JNswLlfLH1OGYHhicR4E/F2kAAWbxSLE3GIg5E8ygzSLD0AqxNhkc5zA2xeWwtY6zGWeMPlB5fwlxuA7L+Yqa8hvkRtJPlhzHEMu+NtgRL5QaHSHFliwbggziLxonvdGx0jcLyxpewfNeWgub2G4XsgIiICIiAiIgIiIPCvdaKQ8zHHuaVTVHvVw6X+Qm+6k/QVT9CM1Z6G26icWQ880ntt+y3lhyWjaim0bvvZP1lbtGclB41LlU+2B3kxjpcrWqSqj2wv+THWUGg6AmwStPpBdHaJkvGw+iPYubNEsvI3rXRmhzaJg9EexBlrrXteXfEp/u3eKzuJa9ryfic32CgpPXltqs+nE7xYR+ytHYW68FR96D3gqtdfW+fhdzsA9o/dWPsFPxaf7xv6SqLQVXbdtPtjpW0bT5ycguaOSMHl6z+lbdrprhTaOhL5XAyEebhB8p55MuRvSueKjSU1XPJXVJub3aOS/zWgcwy7kHk4YXAfVsA9a2fjddD7MqAw6NpweM9plPJ8q4yD8rmjsVEapaFfW1UcGdpHYpXD5sLc3m/JlcDpIXTrGAAACwAAAG4Abgg8aDievJ7xykKPQcT15PeOUhQEREBERAREQEREBERAREQQ9MfITfdv/AEFVHRjNWprPMWUspAvlY9AcQCewElVZSb1fobTqabR9b3n8xW5xblpup7fNg9Lv1FblFuUEepKqDbA7yox0H2rf9dNPml4CNjCZamURROLHSRseeWQNc04bcxuACbG1jUm0HTzagNeYy1zHGNxa4SxOc0m7ophlIzfnkRuICDX9CHzresLovRnEb9kexc1aHrWtfiN8iCAbDF0DnN8lfegdZYJGMHlB7ntjbE+zHvBAIlY0m7o8JDrjcL3sQQA2oFa/rnnSyj0Cs8SsHrY34tL9h3sQVJr3DcU7uYDww/2sDoHXGu0e2ZlM9rRLguXNDy1zW8Zl9xseW63DWyHFTxu5sPcW29tlXdS9oIFr8veAB4AHtVH28zVMhnqZHvJzL3kknvXvJJjsALMbxWj/ALvUZpc7fu5grm2X7PSwtrKxlnCxhp3DNh5JJAfnczeTec9wZ/ZbqkaKAyyttUTAFwO+KPe2PoPKemw5FvCIoI9BxPXk945SFHoOJ68nvHKQgIiICIiAiIgIiICIiAiIgx2sbiKSoIyIgmIPMRG4gqh6LWVrDaRhFvnMALT1tyLewkdCvTWuVrKKpc6+HgJb235xkWHTmuZZ3h3lNIIO4hWC5tSNP0nBNYZ4sWeWINvck5NfZx7lv0UzCLgi3d7VzDSjJTop3szY9zDzsc5h8E4OgdKU0UzHRvaHscLOYcw4cxtvHQqf2sMax0bWgNaG2DQA0NaMgABuCwLtYaxu6rqO2WV3tKh1esNW8gGeU9GIlT0slt5PbH6AdeVufzv3XSGjABGzP5o5ehc9TaQrYbF00zLgEEOc24KmRadqnDOrqD/9pf8AcpLMp2VrPXnrvxzll/XQz5mNFyQBzrVNataKIQyR/CIy5zS2zDwliRyhlyO0Ko3Sl5u4lx53EuPeVHnWuMMxX6yCRgiay7QALvAANuXACb7uU25wobtUayqnj+DwOfwkTXmS2GNnnHxHHIcr+bJ57bgViafer92T6RbLQhgteF72G2dwTjB/MR6qCNqPs1p6LDNMRNUjMOt5uI+g07z6Rz5gFviIoCIiCPQcT15PeOUhR6DievJ7xykICIiAiIgIiICIiAiIgIiIK52y6bdFDHTNy4a7nn0Yy0hva4g+r0qhqikcHF0TsN8yzkJ9i6a171TZpGDBiDJmEuilIuATva70XWF+oHO1lQem9X6uifgqYXMzsJONG/7MgyPVv5wFRgY9KSR/KRHrGXty8VMj05C7eS3rFvFZGFqS6NhdviZ12APeEGPfVMdue09RCiPmwuBHIps2g6f6Fuou/tY6bRcYOWL8RUs74rWGeWGUyxvmMhpzWGWqwcJ8wWHUvCCRQxQM9L8RU2HRkZAuHHrc/wDtZ16sdePxwnI3u357su51I+FAb3AdZAXi/STTk3E88zAT47lLi0dCMxEzrIB8SvZwA6FtyYYiR2R8hvKAbuPbyKyNjulnQ1jado83O0tLeYxxue13YGuHrdC02m0bPUSCOCJ8jz81gv2k7mjpNgrm2Z6guoSaipLTUObhaxpxNhYcz5XK82FyMhmBe5QWCiIoCIiCPQcT15PeOUhR6DievJ7xykICIiAiIgIiICIiAiIgIiIC+JomvaWvaHNORa4BwI5iDvXxNAXEHG9tgRZpABuRmbjfl4r4+Cn62Tvb/SDXtIbPdGy3IhMRPLC4sHY03aO5YCr2Ut/wqtw9GRgd+YEexWB8FP1sne3+k+Cn62Tvb/SCo6nZVX38iWmcOcukae0YD7Vi5tlGlL5CnPVK4e1quOvqmQkNfJNctxC2Cx84yO1yLA4pGb8s7lfjqyPBHJwsxZJhwuGGwxEAYsss3DxO4Eh0U1Hsm0rzUw65XfsxZKk2TV/zpaUdTpXH3YVp09ZG9hfw0zQMJ8uzSQ8AsIFs8VxYb75Wvkv34bBiDPhL8RLRY2GbsNhxcuOz8becJ0aJS7JPrazLlbHHb8xd+y2DR+zXRsdi5j5SOWV5t+Flge262j4KfrZO9v8ASfBT9bJ3t/pAoaCGFuCGJkbfoxtawdZtvKkqN8FP1sne3+kFKbg8LJkb2u2xyIsct2aCSiIgIiII9CxwZZwscTza98jI4jPqIUhEQEREBERAREQEREBERAREQEREBERBHqaNkmbgb4XNuHPYQ1xaXAFpBFyxvcvH/wATDdhDXDg+IA+UBvkhtgA61rNAtuOfObzkQQo9FQtYYwyzSQSMT7gtths6924cItYjDYWsn/i4bgllyCDcueTcGNwJJOZvDEfV6SpqICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k="
  },
  {
    id: 18,
    name: "Noise Cancelling Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500"
  }
];


let cart = [];

function renderProducts() {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">Rs.${product.price.toFixed(2)}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

window.addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  renderCart();
};

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>Rs.${item.price.toFixed(2)} x ${item.quantity}</p>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Modal handling
const modal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const closeCart = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');

cartIcon.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeCart.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Thank you for your purchase!');
  cart = [];
  updateCartCount();
  renderCart();
  modal.style.display = 'none';
});

// Initialize the page
renderProducts();
