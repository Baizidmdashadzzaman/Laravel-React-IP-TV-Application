<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use App\Models\Stream;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function stream()
    {
        $allData = Stream::latest()->paginate(10);
		return response()->json([
		'allData' => $allData
		]); 
    }

    public function index()
    {
        $allData = Product::latest()->paginate(3);
		return response()->json([
		'allData' => $allData
		]); 
    }

    public function search(Request $request)
	{
        $query = $request->get('search');
		if($request->get('search') == null)
		{
            $allData=Product::latest()->get();
		}
		else
		{
            if($request->get('search') == "all")
		    {
               $allData=Product::latest()->get();
		    }
		    else
		    {
                $allData=Product::where('product_name', 'LIKE', "%{$query}%")->latest()->get();		
		    }
		}
		return response()->json([
            'allData' => $allData,
        ]); 	
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
