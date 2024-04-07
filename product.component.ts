import { Component, Output, EventEmitter } from '@angular/core';
interface ImageColor {
  tenMau: string;
  maMau: string;
  images: string[];
}

interface Product {
  name: string;
  gia_goc: number;
  gia_hien_tai: number;
  don_vi: string;
  don_gia: number;
  slg_don_gia: number;
  img_And_Colors: ImageColor[];
  listSize: string[];
  size_unit: string;
  quantityInStock: number;
  isBestSeller: boolean;
}

interface InputData {
  currentColor: string;
  currentSize: string;
  productQuantityInput: number;
    totalPrice: number;
  isNotBuyNow: boolean;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public products: Product[] = [
    {
      name: "Áo len tăm cổ V",
      gia_goc: 165000,
      gia_hien_tai: 99000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 650,
      img_And_Colors: [{
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwezgosm795',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewysfz3d4',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewyy2fzde',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewytuqne8'
        ]
      },
      {
        tenMau: "red",
        maMau: "red",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewysfz3d4'
        ]
      },
      {
        tenMau: "white",
        maMau: "white",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewyy2fzde'
        ]
      },
      {
        tenMau: "beige-colored",
        maMau: "beige-colored",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmetwewytuqne8'
        ]
      }],
      listSize: ["Freesize"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "Đầm mùa Xuân",
      gia_goc: 220000,
      gia_hien_tai: 189000,
      don_vi: "đ",
      don_gia: 4.5,
      slg_don_gia: 200,
      img_And_Colors: [{
        tenMau: "yellow",
        maMau: "yellow",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbki-lm5tfo4tl0kja6',
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmn-lm5tfwaxl7axd1',
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn2-lm5tfkzwbvq168'
        ]
      },
      {
        tenMau: "pink",
        maMau: "pink",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmn-lm5tfwaxl7axd1',
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbn2-lm5tfkzwbvq168'
        ]
      }],
      listSize: ["S", "M", "L"],
      size_unit: "cm",
      quantityInStock: 0,
      isBestSeller: false
    },
    {
      name: "Đầm",
      gia_goc: 300000,
      gia_hien_tai: 200000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 350,
      img_And_Colors: [{
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-23020-cvahq9x0gfnva6',
          'https://down-vn.img.susercontent.com/file/sg-11134201-23020-1y2dyay0gfnvaa',
          'https://down-vn.img.susercontent.com/file/sg-11134201-23020-9saja0x0gfnvbf',
          'https://down-vn.img.susercontent.com/file/sg-11134201-23020-z7vg19x0gfnv94'
        ]
      }],
      listSize: ["M", "L"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: false
    },
    {
      name: "Đầm cổ sen",
      gia_goc: 460000,
      gia_hien_tai: 400000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 500,
      img_And_Colors: [{
        tenMau: "white",
        maMau: "white",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqd4bw8kethu73',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqiro2mlg9pz9b',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqbo9gluk9uae5',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqbo9gluenkif2'
        ]
      },
      {
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqbo9gluk9uae5',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqbo9gluenkif2'
        ]
      }],
      listSize: [ "S", "M", "L"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "[SẴN] Áo blazer nữ",
      gia_goc: 220000,
      gia_hien_tai: 169000,
      don_vi: "đ",
      don_gia: 4.9,
      slg_don_gia: 1000,
      img_And_Colors: [{
        tenMau: "brown",
        maMau: "#6A5F59",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-22120-wif57yzkq3kv2a',
          'https://down-vn.img.susercontent.com/file/sg-11134201-22120-02s3a1zkq3kv76',
          'https://down-vn.img.susercontent.com/file/sg-11134201-22120-bkg83xzkq3kv0b'
        ]
      },
      {
        tenMau: "beige-colored",
        maMau: "beige-colored",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-22120-02s3a1zkq3kv76'
        ]
      },
      {
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-22120-bkg83xzkq3kv0b'
        ]
      }],
      listSize: ["S", "M", "L"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "Giày oxford nữ  ",
      gia_goc: 150000,
      gia_hien_tai: 126000,
      don_vi: "đ",
      don_gia: 4.5,
      slg_don_gia: 100,
      img_And_Colors: [{
        tenMau: "beige-colored",
        maMau: "beige-colored",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134201-23030-8gzglbphn8nvd1',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0lzyad26e5c2',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0lzyadx2vx5d',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0lzyad26rv2b',
          'https://down-vn.img.susercontent.com/file/vn-11134201-23030-r9x6rg6escovcd'
        ]
      },
      {
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll0lzyadx2vx5d'
        ]
      }
    ],
      listSize: ["35", "36", "37"],
      size_unit: "cm",
      quantityInStock: 10,
      isBestSeller: false
    },
    {
      name: "Giày NB 300 đủ 3 phối màu",
      gia_goc: 800000,
      gia_hien_tai: 407000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 1700,
      img_And_Colors: [{
        tenMau: "blue",
        maMau: "blue",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqcdj5w5tx6fdc',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqcdj5w60y0na6',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq7enjsff0sy6d',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqcdj5w5vbqv1d',
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lff8q1br1zescc'
        ]
      },
      {
        tenMau: "green",
        maMau: "green",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lff8q1br1zescc'
        ]
      }],
      listSize: ["36", "37","38"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "Mũ Lovito",
      gia_goc: 73000,
      gia_hien_tai: 51000,
      don_vi: "đ",
      don_gia: 4.7,
      slg_don_gia: 375,
      img_And_Colors: [{
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbmp-lqoa68149mc3e0',
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rblf-lnsfyg7sr9x124',
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbly-lnsfyfg1vvlc94'
        ]
      },
      {
        tenMau: "white",
        maMau: "#F4EDE3",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rblf-lnsfyg7sr9x124'
        ]
      },
      {
        tenMau: "brown",
        maMau: "brown",
        images: [
          'https://down-vn.img.susercontent.com/file/sg-11134201-7rbly-lnsfyfg1vvlc94'
        ]
      }],
      listSize: ["freesize"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: false
    },
    {
      name: "Vớ phối ren",
      gia_goc: 8000,
      gia_hien_tai: 5400,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 4500,
      img_And_Colors: [{
        tenMau: "black",
        maMau: "#000",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lop1zvakbpsg44',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lop1zvakab8096',
          'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh8tc7vs9yr62e'
        ]
      },
      {
        tenMau: "white",
        maMau: "white",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lop1zvakab8096'
        ]
      }],
      listSize: ["freesize"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "Dép lê nữ",
      gia_goc: 150000,
      gia_hien_tai: 139000,
      don_vi: "đ",
      don_gia: 4.9,
      slg_don_gia: 501,
      img_And_Colors: [{
        tenMau: "beige-colored",
        maMau: "beige-colored",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfjl09cse8w4db',
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfjl09ujo9dw9f',
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfjl0aesumb971'
        ]
      },
      {
        tenMau: "pink",
        maMau: "pink",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfjl09ujo9dw9f'
        ]
      },
      {
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lfjl0aesumb971'
        ]
      }],
      listSize: ["36", "37", "38", "39"],
      size_unit: "cm",
      quantityInStock: 0,
      isBestSeller: false
    },
    {
      name: "Đồng hồ WR unisex",
      gia_goc: 380000,
      gia_hien_tai: 250000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 11000,
      img_And_Colors: [{
        tenMau: "pink",
        maMau: "pink",
        images: [
          'https://down-vn.img.susercontent.com/file/c06d6cd52f352a0fb7258689841d5cb3',
          'https://down-vn.img.susercontent.com/file/188991ae393eb6e6b3ef5cbf9451889d',
          'https://down-vn.img.susercontent.com/file/4b8cc1d7859764ef4bdabef26ebf4ae8'
        ]
      },
      {
        tenMau: "black",
        maMau: "black",
        images: [
          'https://down-vn.img.susercontent.com/file/188991ae393eb6e6b3ef5cbf9451889d'
        ]
      },
      {
        tenMau: "yellow",
        maMau: "yellow",
        images: [
          'https://down-vn.img.susercontent.com/file/4b8cc1d7859764ef4bdabef26ebf4ae8'
        ]
      }],
      listSize: ["freesize"],
      size_unit: "cm",
      quantityInStock: 200,
      isBestSeller: true
    },
    {
      name: "Màn hình GLOWY",
      gia_goc: 4290000,
      gia_hien_tai: 1299000,
      don_vi: "đ",
      don_gia: 4.8,
      slg_don_gia: 5000,
      img_And_Colors: [{
        tenMau: "back",
        maMau: "#313131",
        images: [
          'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/5697/275235/dell-lcd-gaming-monitor-24-5-inch-s2522hg-thumb-200x200.jpg',
          'https://down-vn.img.susercontent.com/file/vn-11134207-23030-ptlm2fr3xcovcf',
          'https://down-vn.img.susercontent.com/file/vn-11134201-23030-hysd07qe14nv19'
        ]
      }],
      listSize: ["21.5","22","24","27"],
      size_unit: "inch",
      quantityInStock: 200,
      isBestSeller: true
    }
  ];

  // Tạo ra 1 mảng mới kthước và số ptử bằng mảng cũ nhưng đổi thành các đ tượng khác
  //sd map để duyệt qua mỗi product trong mảng this.products. trả về các thuộc tính...
  public inputDatas: InputData[] = this.products.map(function (product) {
    return {
      // lấy tên color đầu tiên của mãng color làm màu mặc định hiện tại
      currentColor: product.img_And_Colors[0].tenMau,
      currentSize: '',
      productQuantityInput: 0, //slg muốn mua, có thể thay đổi
      totalPrice: 0,
      isNotBuyNow: true
    };
  });

  // ----COLOR----
  updateColor(products_index: number, colorButtonClicked: string) {
    // Gán colorName trên sp đã click cho biến currentColor của sp đó
    this.inputDatas[products_index].currentColor = colorButtonClicked;
  }

  // ----SIZE----
  updateBtnSize(products_index: number, sizeButtonClicked: string) {
    // Gán kthước trên sp đã click cho biến currentSize của sp đó
    this.inputDatas[products_index].currentSize = sizeButtonClicked;
    this.updateBuyNow(products_index);
  }

  // ----QUANTITY----
  updateBuyNow(products_index: number) {
    this.inputDatas[products_index].isNotBuyNow = this.inputDatas[products_index].currentSize == '' || this.inputDatas[products_index].productQuantityInput == 0;
  } //ktra đk. nếu sz chuỗi rỗng-->sz chưa được chọn. 

  public addQuantity(p_index: number) {
    this.inputDatas[p_index].productQuantityInput++;
    this.updateBuyNow(p_index);
    this.updateTotalPrice(p_index);
  }

  public minusQuantity(p_index: number) {
    this.inputDatas[p_index].productQuantityInput--;
    this.updateBuyNow(p_index);
    this.updateTotalPrice(p_index);
  }
// @Input() totalPrice!: number; // tạo một thuộc tính có thể nhận giá trị từ component cha
@Output() totalPriceChange = new EventEmitter<number>();// tạo 1 sự kiện có thể truyền giá trị sang cho component cha

//----Tổng----
updateTotalPrice(p_index: number) {
  this.inputDatas[p_index].totalPrice = this.products[p_index].gia_hien_tai * this.inputDatas[p_index].productQuantityInput;  //slg sp được chọn để mua
  //gtri hiện tại của sp
  this.updateTotalPriceOfProducts();
}

//----tổng tiền----
updateTotalPriceOfProducts() {
  let sum = 0;
  this.inputDatas.forEach((data) => { sum += data.totalPrice });
  this.totalPriceChange.emit(sum); //phát ra sự kiện
}

  // ----BUY----
  buyNow() {
    alert('Đặt hàng thành công!')
  }
  
}

